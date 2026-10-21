import React from 'react'
import useCategories from './useCategories'
import { Alert, Box, Chip, CircularProgress } from '@mui/material';

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
                gap: 1
            }}>
                {data.map((category) => (
                    <Chip label={category.name} clickable />
                )
                )}
            </Box>
        </>
    )
}
