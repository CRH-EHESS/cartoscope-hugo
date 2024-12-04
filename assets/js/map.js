import maplibregl from 'maplibre-gl';

export function createMap(containerId, options) {
    return new maplibregl.Map({
        container: containerId,
        ...options
    });
}


// I can't get ES6 export to work with Hugo's asset pipeline...
window.createMap = createMap;
