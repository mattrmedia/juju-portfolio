import React from 'react';
import styled from '@emotion/styled';

const CopyrightText = styled.p`
    font-size: .75rem;
    margin-top: auto;
`

export const Copyright = () => {
    const year = new Date().getFullYear();
    return (
        <CopyrightText>Copyright © {year} Julia Roe. All rights reserved.</CopyrightText>
    )
}