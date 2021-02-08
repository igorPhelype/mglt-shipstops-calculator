import React from 'react'
import { StyledCard } from './styles'

const Card: React.FC = ({
    children
}) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

export default Card

export { StyledCardContent as CardContent } from './styles'
