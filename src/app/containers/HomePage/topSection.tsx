import React from 'react'
import styled from 'styled-components';
import { SCREENS } from '../../components/responsive';
import tw from 'twin.macro';
import FetchApi from '../../../api/apod'
import { SearchButton } from '../../components/button/searchButton';

const TopSectionContainer = styled.div`
    height: 400px;
    margin-top: 6em;
    ${tw`
        flex
        justify-between
        w-full
        max-w-screen-2xl
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`;

const TopContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
    `}
`;

const Header = styled.h1`
    ${tw`
        font-bold
        text-2xl
        text-black
        text-center
        mb-4
        transition
        duration-200
        ease-in-out
        hover:text-purple-800
        sm:text-3xl
        sm:leading-snug
        md:text-5xl
        md:font-extrabold
        lg:font-black 
        lg:leading-normal
        duration-300
        xl:text-5xl 
        xl:leading-relaxed
        duration-700
    `}
`;

const Description = styled.p`
    ${tw`
        text-xs
        text-center
        overflow-hidden
        max-h-12
        text-gray-800
        sm:max-h-full
        lg:text-sm
        xl:text-2xl
    `}
`;

export function TopSection() {
    return (
        <TopSectionContainer>
            <TopContainer>
                <Header>Spacetagram!</Header>

                <Description>
                    Image-sharing from the final frontier.
                </Description>

                <SearchButton theme="filled" text="Search" />
            </TopContainer>
        </TopSectionContainer>
    )
}