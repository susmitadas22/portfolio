import Link from 'next/link'
import { AnimatedContainer } from '~/components/ui/animated-container'
import { Spotlight } from '~/components/ui/spotlight'
import { EMAIL, PROJECTS, SOCIAL_LINKS, WORK_EXPERIENCE } from '~/data'
import { MagneticSocialLink } from './_components/magnetic-social'
import { GithubIcon } from './_components/github'
import { ProjectCard } from './_components/project-card'
import { getPosts } from '~/lib/post-utils'
import { AnimatedBackground } from '~/components/ui/animated-background'

export default function Home() {
  return (
    <AnimatedContainer
      sections={[
        <div key={'introduction'} className="flex-1">
          <p className="text-zinc-700 dark:text-zinc-300">
            hello!!! i&apos;m susmita, cs student & full-stack dev who vibes
            with modern tools like next.js, prisma, and typescript and loves
            building products that solve real-world problems...
          </p>
        </div>,
        <div key={'works'}>
          <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => (
              <a
                className="relative overflow-hidden bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                key={job.id}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full bg-[#fff0f5] p-4 dark:bg-[#111111]">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>,
        <div key={'projects'}>
          <h3 className="mb-5 text-lg font-medium">Projects</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="relative rounded-xs bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectCard src={project.thumbnail} />
                </div>
                <div className="px-1">
                  <div className="mb-1 flex flex-row items-center justify-between">
                    <Link
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={project.link}
                      target="_blank"
                    >
                      {project.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 p-1 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                        aria-label={`${project.name} GitHub Repository`}
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>,
        <div key={'posts'}>
          <h3 className="mb-3 text-lg font-medium">Latest Blog Posts</h3>
          <div className="flex flex-col space-y-0">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-xs dark:bg-zinc-900/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {getPosts()
                .sort((a, b) => {
                  return (
                    new Date(b.metadata.date).getTime() -
                    new Date(a.metadata.date).getTime()
                  )
                })
                .slice(0, 3)
                .map((post) => (
                  <Link
                    key={post.slug}
                    className="-mx-3 rounded-xs px-3 py-3"
                    href={`/posts/${post.slug}`}
                    data-id={post.slug}
                  >
                    <div className="flex flex-col space-y-1">
                      <h4 className="font-normal dark:text-zinc-100">
                        {post.metadata.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {post.metadata.summary}
                      </p>
                    </div>
                  </Link>
                ))}
            </AnimatedBackground>
          </div>
          <div className="mt-4">
            <Link
              href="/posts"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              View all posts &rarr;
            </Link>
          </div>
        </div>,
        <div key={'connect'}>
          <h3 className="mb-5 text-lg font-medium">Connect</h3>
          <p className="mb-5 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a
              className="underline dark:text-zinc-300"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex items-center justify-start space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </div>,
      ]}
    />
  )
}
