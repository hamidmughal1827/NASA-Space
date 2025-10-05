
import { TeamMember, ChartData, TableRow } from './types';
import type { GeoJsonObject } from 'geojson';

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

export const FINDINGS_CHART_DATA: ChartData[] = [
    { name: 'Pre-Flood', area: 15 },
    { name: 'Peak Flood', area: 312 },
    { name: 'Post-Flood', area: 62 },
];

export const FINDINGS_TABLE_DATA: TableRow[] = [
    { stage: 'Pre-Flood Water Area', area: 15, change: '-' },
    { stage: 'Peak Flood Inundation', area: 312, change: '+1980%' },
    { stage: 'Post-Flood (10 days later)', area: 62, change: '-80%' },
];

// Mock GeoJSON data for Multan, Pakistan area (approx. 30.2° N, 71.48° E)
export const PRE_FLOOD_GEOJSON: GeoJsonObject = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Polygon',
            coordinates: [[
                [71.45, 30.18], [71.46, 30.22], [71.49, 30.21], [71.47, 30.17], [71.45, 30.18]
            ]]
        }
    }]
};

export const DURING_FLOOD_GEOJSON: GeoJsonObject = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Polygon',
            coordinates: [[
                [71.40, 30.15], [71.42, 30.25], [71.55, 30.28], [71.58, 30.20], [71.50, 30.14], [71.40, 30.15]
            ]]
        }
    }]
};

export const POST_FLOOD_GEOJSON: GeoJsonObject = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Polygon',
            coordinates: [[
                [71.42, 30.16], [71.44, 30.23], [71.52, 30.24], [71.53, 30.18], [71.48, 30.15], [71.42, 30.16]
            ]]
        }
    }]
};
