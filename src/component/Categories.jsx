import React from 'react'
import useCategories from './useCategories'
import { Alert, Box, Chip, CircularProgress } from '@mui/material';
import CategoryItem from './CategoryItem';

export default function Categories() {
    const { isPending, isError, data } = useCategories();

    if (isPending) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Alert severity='error' >Failed to load Categories</Alert>
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px'
            }}>
                {data.map((category) => (
                    <CategoryItem category={category} />
                )
                )}
            </Box>
        </>
    )
}
