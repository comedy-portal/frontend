import Image from 'next/image'

type ContentBlockProps = {
    title: string
    imgSrc: string
}

export const ContentBlock = (props: ContentBlockProps) => {
    return (
        <figure className="m-0 flex flex-col gap-y-2">
            <Image
                src={props.imgSrc}
                alt={props.title}
                width={300}
                height={200}
                className="aspect-video rounded-lg align-top"
            />
            <figcaption>{props.title}</figcaption>
        </figure>
    )
}
