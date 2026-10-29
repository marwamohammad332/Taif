import { Chip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

export default function CategoryItem({category}) {
  return (
    <Chip component={Link}
    to={`/Category/${category.id}`}
    sx={{
        fontSize:'14px',
        fontWeight:'500',
        lineHeight:'20px',
        letterSpacing:'0.14px',
        color:'#676c73',
        background:'none',
        p:0,
        '& .MuiChip-label':{px:0},
        transition:'color 0.2s',
        '&:hover':{
            background:'none',
            color:'#18232c'
        }
    }}
     label={category.name} clickable />
  )
}
