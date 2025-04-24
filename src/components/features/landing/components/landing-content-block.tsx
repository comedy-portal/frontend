import Image from 'next/image'

type LandingContentBlockProps = {
    title: string
    imgSrc: string
}

export const LandingContentBlock = (props: LandingContentBlockProps) => {
    return (
        <figure className="m-0 flex flex-col gap-y-2">
            <Image src={props.imgSrc} alt={props.title} width={300} height={200} className="rounded-lg align-top" />
            <figcaption>{props.title}</figcaption>
        </figure>
    )
}
