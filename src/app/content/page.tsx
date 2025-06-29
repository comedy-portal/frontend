import { redirect } from 'next/navigation'

import { ContentType } from '@/utils/enums/common'

export default function ContentPage() {
    redirect('/content/' + ContentType.SPECIAL)
}
