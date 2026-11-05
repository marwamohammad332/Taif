import useCategories from '../hooks/useCategories'
import { Alert, Box, Chip, CircularProgress } from '@mui/material';
import React from 'react'


export default function Categories({children , gap = '24px', wrap = 'wrap'}) {
    const { isPending, isError, data } = useCategories();

    if (isPending) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Alert severity='error' >Failed to load Categories</Alert>
    return (
        <>
            <Box sx={{ display: 'flex', 
                flexWrap: wrap,
                 gap }}>
            {data.map((category) => (
                <React.Fragment key={category.id}>
                    {children(category)}
                </React.Fragment>
            ))}
        </Box>
        </>
    )
}
