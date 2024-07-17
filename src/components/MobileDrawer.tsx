"use client"

import React from "react"
import { AiFillCloseSquare } from "react-icons/ai"
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
} from '@chakra-ui/react'
import Image from "next/image"
import Link from "next/link"
import drawerImg from '../../public/drawer.png'

const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className="xl:hidden h-full">
            <div onClick={() => {
                onOpen();
            }} className='w-8 h-full flex-col-start-center relative'>
                <Image src={drawerImg} alt="Drawer Icon" fill={true} className="w-full h-full object-contain" />
            </div>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                onEsc={onClose}
            >
                <DrawerOverlay className="bg-black bg-opacity-50" />
                <DrawerContent className="!w-[70%] h-full flex-col-center-between bg-nav-color text-black-color ">
                    <div className="w-full h-full">
                        <section className="w-full h-full flex flex-col gap-10">
                            <div className="flex-row-center-between w-full">
                                <Link href={`/how-it-works`} onClick={onClose} className="w-full">
                                    How It works
                                </Link>
                                <AiFillCloseSquare onClick={onClose} className='absolute lg:cursor-pointer top-0 left-[-40px] text-[40px] text-nav-color' />
                            </div>
                        </section>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default MobileDrawer