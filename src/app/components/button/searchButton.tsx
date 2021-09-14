import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';


interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
    theme: "filled" | "outlined";
    text: string;
}

const BaseButton = styled.button`
    ${tw`
        w-1/6
        pl-5
        pr-5 
        pt-3 
        pb-3 
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-solid
        border-transparent
        border-2 
        focus:outline-none 
        transition-all
        duration-200
        ease-in-out
        m-1 
    `}
`;

const OutlinedButton = styled(BaseButton)`
    ${tw`
        mt-6
        bg-purple-800
        hover:bg-transparent
        hover:text-purple-800
        hover:border-purple-800
    `}
`;

const FilledButton = styled(BaseButton)`
    ${tw`
        mt-6
        border-purple-800
        text-purple-800
        bg-transparent
        hover:bg-purple-800
        hover:text-white
        hover:border-transparent
    `}
`;

export function SearchButton(props: IButtonProps) {

    const { theme, text } = props;
    const [image, setImage] = useState();

    if(theme === "filled") {
        return <FilledButton>{text}</FilledButton>
    } else {
        return <OutlinedButton>{text}</OutlinedButton>
    }
}