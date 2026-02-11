'use client'

import { useState } from 'react'

import classNames from 'classnames'

import Image, { ImageProps } from 'next/image'

import { ImageStub } from '@/components/ui/image-stub'

export const ImageWithFallback = (props: ImageProps) => {
    return <ImageWithFallbackInner key={String(props.src)} {...props} />
}

function ImageWithFallbackInner(props: ImageProps) {
    const [error, setError] = useState(false)

    if (error || !props.src) {
        return (
            <div className={classNames('flex aspect-square items-center justify-center bg-gray-200', props.className)}>
                <ImageStub className="w-1/5 text-gray-300" />
            </div>
        )
    }

    return (
        <Image
            {...props}
            src={props.src}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8eftuPQAIOAMS40NHBQAAAABJRU5ErkJggg=="
            alt={props.alt}
            onError={() => setError(true)}
        />
    )
}
