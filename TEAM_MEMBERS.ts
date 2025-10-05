import { TeamMember } from './types';



export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'A (Developer)',
        role: 'Full-Stack Developer',
        avatarUrl: 'https://picsum.photos/seed/dev/200',
        bio: 'Passionate about creating interactive web applications and data visualization tools.',
        skills: ['React', 'TypeScript', 'Node.js', 'GIS'],
        contribution: 'Developed the interactive web platform, implemented the before/after image slider, and created the responsive design for optimal user experience across all devices.'
    },
    {
        name: 'B (SAR Analyst)',
        role: 'SAR Data Specialist',
        avatarUrl: '/WhatsApp Image 2025-09-26 at 11.32.28 AM.jpeg',
        bio: 'Expert in Synthetic Aperture Radar data processing and flood monitoring applications.',
        skills: ['Sentinel-1', 'SAR Processing', 'Flood Analysis', 'Python'],
        contribution: 'Processed Sentinel-1 SAR data to extract flood extent information, analyzed temporal changes in water bodies, and provided critical insights for disaster response planning.'
    },
    {
        name: 'C (GIS Specialist)',
        role: 'GIS & Mapping Expert',
        avatarUrl: 'https://picsum.photos/seed/gis/200',
        bio: 'Specialized in geospatial analysis and creating comprehensive flood impact maps.',
        skills: ['QGIS', 'ArcGIS', 'Geospatial Analysis', 'Cartography'],
        contribution: 'Created detailed flood extent maps, performed spatial analysis of affected areas, and developed the interactive mapping component to visualize flood progression over time.'
    },
    {
        name: 'D (Research & Communication)',
        role: 'Research & Documentation Lead',
        avatarUrl: 'https://picsum.photos/seed/comms/200',
        bio: 'Focused on translating complex scientific data into accessible insights for stakeholders.',
        skills: ['Research', 'Technical Writing', 'Data Interpretation', 'Communication'],
        contribution: 'Conducted comprehensive research on flood impacts, prepared technical documentation, and developed compelling narratives to communicate findings to diverse audiences.'
    },
];
