import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { Octokit } from '@octokit/rest'
import { defineLoader } from 'vitepress'

const octokit = new Octokit()

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
  stable: GitHubRelease
  beta: GitHubRelease
}

declare const data: AppRelease
export { data }

export default defineLoader({
  async load(): Promise<AppRelease> {
    async function getLatest(owner: string, repo: string) {
      try {
        const { data } = await octokit.repos.getLatestRelease({ owner, repo })
        return data
      }
      catch (err) {
        // No latest release for this repo; return a minimal fallback release object
        return {
          tag_name: 'v0.0.0',
          name: 'No release',
          body: 'No release found for this repository.',
          author: { login: owner },
          published_at: new Date().toISOString(),
        } as GitHubRelease
      }
    }

    const stable = await getLatest('yomihon', 'yomihon')
    const beta = await getLatest('yomihon', 'yomihon-preview')

    return { stable, beta }
  },
})
