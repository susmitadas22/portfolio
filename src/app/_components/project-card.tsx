import { XIcon } from 'lucide-react'
import Image from 'next/image'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from '~/components/ui/morphing-dialog'

type ProjectCardProps = {
  src: string
}

export function ProjectCard({ src }: ProjectCardProps) {
  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <MorphingDialogTrigger>
        <Image
          src={src}
          alt="Project thumbnail"
          width={400}
          height={300}
          priority
          className="aspect-video w-full rounded-xs"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-xs bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <Image
            src={src}
            className="aspect-video h-[50vh] w-full rounded-xs md:h-[70vh]"
            alt="Project thumbnail"
            width={400}
            height={300}
            priority
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
