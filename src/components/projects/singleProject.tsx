import React, { useState } from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Grid, IconButton, Typography, Collapse, styled, List, ListItem } from "@mui/material"
import { ExpandMore } from '../../images'

const TechCollapse = styled(Collapse)({
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    position: "absolute",
    background: '#fff',
    width: '100%',
    zIndex: 10,
    top: '99%',
    borderRadius: '4px'
})

interface IProps {
    project: {
        name: string,
        img: string,
        live?: string,
        github?: string,
        desc: string,
        tech: string[]
    }
}


const SingleProject = ({ project }: IProps) => {
    const [Expanded, setExpanded] = useState(false)


    const onExpand = () => {
        setExpanded(state => !state)
    }

    return (
        <Grid item sx={{ position: 'relative' }}>
            <Card sx={{ maxWidth: 400 }}>
                <CardHeader title={project.name} />
                <CardMedia
                    component="img"
                    height="200"
                    image={project.img}
                    alt={`${project.name} image`}
                />
                <CardContent>
                    {project.desc}
                </CardContent>
                <CardActions>
                    <IconButton onClick={onExpand} sx={{ transform: Expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <img src={ExpandMore} />
                    </IconButton>
                </CardActions>
                <TechCollapse in={Expanded} timeout="auto" unmountOnExit>
                    <CardContent >
                        <List>
                            {project.tech.map(t => <ListItem>{t}</ListItem>)}
                        </List>
                    </CardContent>
                </TechCollapse>
            </Card>
        </Grid>
    )
}

export default SingleProject