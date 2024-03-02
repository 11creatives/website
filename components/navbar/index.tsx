import Image from 'next/image'

import { navbarStyle } from './style.css'
import { Container } from '../container'

export function Navbar() {
    return (
        <nav>
            <Container wrapperClassName={navbarStyle}>
                <Image
                    src="/asset/logo.svg"
                    alt="11creatives logo"
                    height={32}
                    width={110}
                />
            </Container>
        </nav>
    )
}
