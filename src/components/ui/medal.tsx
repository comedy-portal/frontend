type MedalProps = {
    place?: number
}

export const Medal = ({ place }: MedalProps) => {
    const variant = place === 1 ? 'gold' : place === 2 ? 'silver' : place === 3 ? 'bronze' : 'neutral'

    const styles = {
        gold: {
            background: 'linear-gradient(to bottom right, #f9ad0e 50%, #e39a00 50%)',
            borderColor: '#ffd27a',
            boxShadow: 'inset 0 0 0 #c68400, 2px 2px 0 rgba(0,0,0,.08)',
            textShadow: '0 0 4px #b87300',
        },
        silver: {
            background: 'linear-gradient(to bottom right, #d1d7da 50%, #bcc2c5 50%)',
            borderColor: '#eef1f3',
            boxShadow: 'inset 0 0 0 #9ea4a7, 2px 2px 0 rgba(0,0,0,.08)',
            textShadow: '0 0 4px #8c9194',
        },
        bronze: {
            background: 'linear-gradient(to bottom right, #df7e08 50%, #c56f06 50%)',
            borderColor: '#ffb55a',
            boxShadow: 'inset 0 0 0 #a85a00, 2px 2px 0 rgba(0,0,0,.08)',
            textShadow: '0 0 4px #8a4a00',
        },
        neutral: {
            background: 'linear-gradient(to bottom right, #d1d7da 50%, #bcc2c5 50%)',
            borderColor: '#eef1f3',
            boxShadow: 'inset 0 0 0 #9ea4a7, 2px 2px 0 rgba(0,0,0,.08)',
            textShadow: '0 0 4px #8c9194',
        },
    }[variant]

    return (
        <div className="relative mb-2">
            <div
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-[0.2em] text-xl font-bold text-white"
                style={styles}
            >
                {place}
            </div>

            {/* Left ribbon */}
            <div
                className="absolute top-[38px] left-0 h-4 w-0 rotate-20 border-x-10 border-y-6 border-solid"
                style={{
                    borderColor: '#FC402D #FC402D transparent #FC402D',
                }}
            />

            {/* Right ribbon */}
            <div
                className="absolute top-[38px] left-6 h-4 w-0 -rotate-20 border-x-10 border-y-6 border-solid"
                style={{
                    borderColor: '#d73728 #d73728 transparent #d73728',
                }}
            />
        </div>
    )
}
