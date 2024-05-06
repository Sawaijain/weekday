import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Avatar, Button } from '@mui/material';
import JobDescriptionModal from './JobDescriptionModal';

const JobCard = ({ job }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card sx={{ maxWidth: 345, display: 'flex', marginBottom: 2, boxShadow: 10, padding: 2, borderRadius: 8 }}>
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline-block', border: '1px solid #ccc', borderRadius: 5, padding: .5, marginBottom: 1 }}>
                    Posted 10 days ago
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', margin: 1 }}>
                    <Avatar sx={{ width: 50, height: 50 }} src={job.logoUrl} alt={job.companyName} />
                    <Box sx={{ marginLeft: 2 }}>
                        <Typography variant="h7" component="div" color="#8b8b8b">
                            {job.companyName}
                        </Typography>
                        <Typography variant="body1">
                            {job.jobRole}
                        </Typography>
                        <Typography variant="body1">
                            {job.location}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body2" color="rgb(77, 89, 106)" style={{ fontSize: "17px", marginBottom: "15px" }}>
                    Estimated Salary: {job?.salaryCurrencyCode==="USD"?'$':"₹"}{job?.minJdSalary} - {job?.maxJdSalary} LPA
                </Typography>
                <Typography variant="body2" color="text.primary" style={{ fontWeight: "200", fontSize: "20px" }}>
                    About the Company:
                </Typography>
                <Typography variant="body2" color="text.primary" style={{ fontWeight: "bold", fontSize: "15px" }}>
                    About us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {job.jobDetailsFromCompany.length > 300 ? job.jobDetailsFromCompany.slice(0, 300) + '...' : job.jobDetailsFromCompany}
                    {/* {job.jobDetailsFromCompany.length > 300 && (
                        <Button onClick={handleOpen} sx={{ ml: 1 }} color="primary">Show more</Button>
                    )} */}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                {job.jobDetailsFromCompany.length > 300 && (
                        <Button onClick={handleOpen} sx={{ display: 'block', margin: 'auto', color: 'primary.main' }} color="primary">View Job</Button>
                    )}
                </Typography>
                <Typography variant="body2" style={{ fontWeight: "bold", fontSize: "15px", color: "#8b8b8b", marginTop: "10px" }}>
                    Minimum Experience
                </Typography>
                <Typography variant="body2" style={{ fontWeight: "bold", fontSize: "15px", color: "#8b8b8b", marginTop: "10px" }}>
                    {job?.minExp || 0} Years
                </Typography>
                {/* <Typography variant="body1" color="text.primary">
                    {job.jobDetailsFromCompany}
                </Typography> */}
                <a href={job?.jdLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" sx={{ color: "black", width: '100%', marginTop: "10px", backgroundColor: "rgb(85, 239, 196)", borderRadius: 3 }}>
                        Easy Apply
                    </Button>
                </a>
                <JobDescriptionModal open={open} handleClose={handleClose} jobDescription={job.jobDetailsFromCompany} />
            </CardContent>
        </Card>
    );
};

export default JobCard;

