import React, { useContext } from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Grid, IconButton, Typography, Collapse, styled, List, ListItem, Box } from "@mui/material"
import { ExpandMore } from '../../images'
import { GitHub, OpenInNew } from "../../images";
import { LanguageContext } from "../../providers/context";
import { Theme } from "@emotion/react";

const TechCollapse = styled(Collapse)({
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    position: "absolute",
    background: '#A9A9A9',
    width: '100%',
    zIndex: 10,
    top: '99%',
    borderRadius: '4px'
})
const Image = styled('img')(({theme}) => ({
    width: '50%',
    borderRadius: '.5rem',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))
interface IStyleProps {
    pos: string
}

const Desc = styled(Box)(({ theme }) => ({
    backgroundColor: '#36454F',
    padding: 16,
    borderRadius: '.5rem',
    '& p': {
        color: '#C0C0C0'
    },
    [theme.breakpoints.down('md')]: {
        margin: 0,
    }
    
}))

const TechBox = styled(Box)(({ pos }: IStyleProps) => ({
    display: 'flex',
    flexDirection: pos == 'row' ? 'row-reverse' : 'row',
    gap: 10,
    margin: '10px 0 0 10px ',
    '& p': {
        backgroundColor: '#D3D3D3',
        color: '#2B2B2B',
        padding: 4,
        borderRadius: '.5rem'
    },
    '& img': {
        maxWidth: 32,
    }

}))

const ProjectBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    }
}))

interface IProps {
    project: {
        name: string,
        img: string,
        live?: string,
        github?: string,
        desc: {
            pl: string,
            en: string
        }
        tech: string[]
    },
    pos: string,
}

const SingleProject = ({ project, pos }: IProps) => {

    const { State } = useContext(LanguageContext)

    return (
        <Grid item maxWidth={980}>
            <ProjectBox component='div' sx={{ flexDirection: pos }}>
                <Image src={project.img} />

                <Box component='div'>
                    <Box component='div' sx={{ marginBottom: 1, display: 'flex', flexDirection: pos, justifyContent: 'flex-end' }}>
                        <Typography variant='h4' sx={{ fontWeight: 600, color: '#FFDB58' }}>
                            {project.name}
                        </Typography>
                    </Box>
                    <Desc component='div' sx={{margin: pos == 'row' ? '0 0 0 -40px' : '0 -40px 0 0'}}>
                        <Typography>
                            {State.Language == 'pl' ? project.desc.pl : project.desc.en}
                        </Typography>
                    </Desc>
                    <TechBox component='div' pos={pos}>
                        {project.tech.map(tech => <Typography>{tech}</Typography>)}
                    </TechBox>
                    <TechBox pos={pos}>
                        {project.github &&
                            <a href={project.github} target='_blank'>
                                <img style={{ filter: 'invert(97%) sepia(10%) saturate(30%) hue-rotate(298deg) brightness(108%) contrast(100%)' }} src={GitHub} />
                            </a>
                        }
                        {project.live &&
                            <a href={project.live} target='_blank'>
                                <img style={{ filter: 'invert(97%) sepia(10%) saturate(30%) hue-rotate(298deg) brightness(108%) contrast(100%)' }} src={OpenInNew} /* style={{maxWidth: '36px'}} */ />
                            </a>
                        }
                    </TechBox>
                </Box>
            </ProjectBox>
            {/* <Card sx={{ maxWidth: 400 }}>
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
            </Card> */}
        </Grid >
    )
}

export default SingleProject