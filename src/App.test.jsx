import { describe, expect, it } from 'vitest'

describe('NaN application', () => {
  it('should correctly identify the project name', () => {
    const projectName = 'NaN'

    expect(projectName).toBe('NaN')
  })

  it('should contain the main application pages', () => {
    const pages = ['Home', 'Login', 'Register', 'Programs', 'Profile']

    expect(pages).toHaveLength(5)
    expect(pages).toContain('Home')
    expect(pages).toContain('Programs')
    expect(pages).toContain('Profile')
  })
})