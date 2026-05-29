class GeoRadioEngine {
    constructor() {
        this.audio = document.getElementById('globalAudio');
        this.playBtn = document.getElementById('playBtn');
        this.volumeRange = document.getElementById('volumeRange');
        this.stationsList = document.getElementById('stationsList');
        this.stationCount = document.getElementById('stationCount');
        this.targetCountry = document.getElementById('targetCountry');
        this.currentStationName = document.getElementById('currentStationName');
        this.engineStatus = document.getElementById('engineStatus');
        this.dynamicPlayer = document.getElementById('dynamicPlayer');
        this.toastContainer = document.getElementById('toastContainer');

        this.map = null;
        this.markerClusterGroup = null;
        this.currentActiveUrl = '';

        this.geoMarkers = [
            { name: 'Syria', code: 'SY', lat: 34.8021, lng: 38.9968 },
            { name: 'United Arab Emirates', code: 'AE', lat: 23.4241, lng: 53.8478 },
            { name: 'Saudi Arabia', code: 'SA', lat: 23.8859, lng: 45.0792 },
            { name: 'Egypt', code: 'EG', lat: 26.8206, lng: 30.8025 },
            { name: 'Lebanon', code: 'LB', lat: 33.8547, lng: 35.8623 },
            { name: 'Jordan', code: 'JO', lat: 30.5852, lng: 36.2384 },
            { name: 'Iraq', code: 'IQ', lat: 33.2232, lng: 43.6793 },
            { name: 'Kuwait', code: 'KW', lat: 29.3117, lng: 47.4818 },
            { name: 'Qatar', code: 'QA', lat: 25.3548, lng: 51.1839 },
            { name: 'Oman', code: 'OM', lat: 21.4735, lng: 55.9754 },
            { name: 'Bahrain', code: 'BH', lat: 26.0667, lng: 50.5577 },
            { name: 'Yemen', code: 'YE', lat: 15.5527, lng: 48.5164 },
            { name: 'Palestine', code: 'PS', lat: 31.9522, lng: 35.2332 },
            { name: 'Tunisia', code: 'TN', lat: 33.8869, lng: 9.5375 },
            { name: 'Algeria', code: 'DZ', lat: 28.0339, lng: 1.6596 },
            { name: 'Morocco', code: 'MA', lat: 31.7917, lng: -7.0926 },
            { name: 'Libya', code: 'LY', lat: 26.3351, lng: 17.2283 },
            { name: 'Sudan', code: 'SD', lat: 12.8628, lng: 30.2176 },
            { name: 'Germany', code: 'DE', lat: 51.1657, lng: 10.4515 },
            { name: 'United Kingdom', code: 'GB', lat: 55.3781, lng: -3.4360 },
            { name: 'France', code: 'FR', lat: 46.2276, lng: 2.2137 },
            { name: 'Italy', code: 'IT', lat: 41.8719, lng: 12.5674 },
            { name: 'Spain', code: 'ES', lat: 40.4637, lng: -3.7492 },
            { name: 'Netherlands', code: 'NL', lat: 52.1326, lng: 5.2913 },
            { name: 'Belgium', code: 'BE', lat: 50.5039, lng: 4.4699 },
            { name: 'Switzerland', code: 'CH', lat: 46.8182, lng: 8.2275 },
            { name: 'Austria', code: 'AT', lat: 47.5162, lng: 14.5501 },
            { name: 'Sweden', code: 'SE', lat: 60.1282, lng: 18.6435 },
            { name: 'Norway', code: 'NO', lat: 60.4720, lng: 8.4689 },
            { name: 'Finland', code: 'FI', lat: 61.9241, lng: 25.7482 },
            { name: 'Denmark', code: 'DK', lat: 56.2639, lng: 9.5018 },
            { name: 'Poland', code: 'PL', lat: 51.9194, lng: 19.1451 },
            { name: 'Portugal', code: 'PT', lat: 39.3999, lng: -8.2245 },
            { name: 'Greece', code: 'GR', lat: 39.0742, lng: 21.8243 },
            { name: 'Ireland', code: 'IE', lat: 53.4129, lng: -8.2439 },
            { name: 'Czech Republic', code: 'CZ', lat: 49.8175, lng: 15.4730 },
            { name: 'Hungary', code: 'HU', lat: 47.1625, lng: 19.5033 },
            { name: 'Romania', code: 'RO', lat: 45.9432, lng: 24.9668 },
            { name: 'Turkey', code: 'TR', lat: 38.9637, lng: 35.2433 },
            { name: 'Ukraine', code: 'UA', lat: 48.3794, lng: 31.1656 },
            { name: 'Japan', code: 'JP', lat: 36.2048, lng: 138.2529 },
            { name: 'South Korea', code: 'KR', lat: 35.9078, lng: 127.7669 },
            { name: 'China', code: 'CN', lat: 35.8617, lng: 104.1954 },
            { name: 'India', code: 'IN', lat: 20.5937, lng: 78.9629 },
            { name: 'Indonesia', code: 'ID', lat: -0.7893, lng: 113.9213 },
            { name: 'Malaysia', code: 'MY', lat: 4.2105, lng: 101.9758 },
            { name: 'Singapore', code: 'SG', lat: 1.3521, lng: 103.8198 },
            { name: 'Thailand', code: 'TH', lat: 15.8700, lng: 100.9925 },
            { name: 'Vietnam', code: 'VN', lat: 14.0583, lng: 108.2772 },
            { name: 'Philippines', code: 'PH', lat: 12.8797, lng: 121.7740 },
            { name: 'Pakistan', code: 'PK', lat: 30.3753, lng: 69.3451 },
            { name: 'United States', code: 'US', lat: 37.0902, lng: -95.7129 },
            { name: 'Canada', code: 'CA', lat: 56.1304, lng: -106.3468 },
            { name: 'Mexico', code: 'MX', lat: 23.6345, lng: -102.5528 },
            { name: 'Brazil', code: 'BR', lat: -14.2350, lng: -51.9253 },
            { name: 'Argentina', code: 'AR', lat: -38.4161, lng: -63.6167 },
            { name: 'Colombia', code: 'CO', lat: 4.5709, lng: -74.2973 },
            { name: 'Chile', code: 'CL', lat: -35.6751, lng: -71.5430 },
            { name: 'Peru', code: 'PE', lat: -9.1900, lng: -75.0152 },
            { name: 'Venezuela', code: 'VE', lat: 6.4238, lng: -66.5897 },
            { name: 'South Africa', code: 'ZA', lat: -30.5595, lng: 22.9375 },
            { name: 'Nigeria', code: 'NG', lat: 9.0820, lng: 8.6753 },
            { name: 'Kenya', code: 'KE', lat: -0.0236, lng: 37.9062 },
            { name: 'Ghana', code: 'GH', lat: 7.9465, lng: -1.0232 },
            { name: 'Ethiopia', code: 'ET', lat: 9.1450, lng: 40.4897 },
            { name: 'Australia', code: 'AU', lat: -25.2744, lng: 133.7751 },
            { name: 'New Zealand', code: 'NZ', lat: -40.9006, lng: 174.8860 }
        ];

        this.initEngine();
    }

    initEngine() {
        this.initMap();
        this.syncInitialVolume();
        this.hookAudioEvents();
        this.hookControls();
    }

    syncInitialVolume() {
        this.audio.volume = this.volumeRange.value / 100;
    }

    initMap() {
        this.map = L.map('map', {
            center: [23.0, 15.0],
            zoom: 3,
            minZoom: 2,
            zoomControl: true,
            maxBounds: [[-90, -180], [90, 180]]
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; CartoDB',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(this.map);

        if (typeof L.markerClusterGroup === 'function') {
            this.markerClusterGroup = L.markerClusterGroup({
                showCoverageOnHover: false,
                maxClusterRadius: 40,
                spiderfyOnMaxZoom: true
            });

            this.geoMarkers.forEach(loc => {
                const marker = L.marker([loc.lat, loc.lng]);
                marker.on('click', () => {
                    this.map.setView([loc.lat, loc.lng], 5, { animate: true, duration: 0.8 });
                    this.fetchLiveStationsByCountry(loc.code, loc.name);
                });
                this.markerClusterGroup.addLayer(marker);
            });

            this.map.addLayer(this.markerClusterGroup);
        } else {
            this.geoMarkers.forEach(loc => {
                const marker = L.marker([loc.lat, loc.lng]).addTo(this.map);
                marker.on('click', () => {
                    this.map.setView([loc.lat, loc.lng], 5, { animate: true, duration: 0.8 });
                    this.fetchLiveStationsByCountry(loc.code, loc.name);
                });
            });
        }
    }

    async fetchLiveStationsByCountry(countryCode, countryName) {
        this.setEngineStatus('QUERYING', 'loading');
        this.targetCountry.innerText = countryName.toUpperCase();
        this.stationsList.innerHTML = `<div class="empty-state">Polling global nodes for ${countryName}...</div>`;

        try {
            const apiEndpoint = `https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/${countryCode}?limit=30&order=votes&reverse=true&hidebroken=true&has_m3u8=false`;
            const response = await fetch(apiEndpoint);
            const data = await response.json();

            this.renderStations(data);
            this.showToast(`Fetched active channels for ${countryName}.`);
        } catch (error) {
            this.stationsList.innerHTML = `<div class="empty-state" style="color:#ff3b30;">API handshaking refused.</div>`;
            this.setEngineStatus('ERROR', 'idle');
            this.showToast('Network error querying remote streaming servers.', true);
        }
    }

    renderStations(stations) {
        this.stationsList.innerHTML = '';
        this.stationCount.innerText = stations.length;

        if (!stations || stations.length === 0) {
            this.stationsList.innerHTML = `<div class="empty-state">No broadcast nodes available.</div>`;
            this.setEngineStatus('EMPTY', 'idle');
            return;
        }

        stations.forEach(station => {
            const row = document.createElement('button');
            row.className = 'api-station-row';
            if (this.currentActiveUrl === station.url_resolved && !this.audio.paused) {
                row.classList.add('active-playing');
            }

            const bitrate = station.bitrate && station.bitrate !== 0 ? `${station.bitrate}k` : 'VBR';
            const tags = station.tags ? station.tags.split(',')[0] : 'LIVE';

            row.innerHTML = `
                <div class="station-info-left">
                    <span class="station-name-text">${station.name.trim()}</span>
                    <span class="station-tags-text">#${tags.toUpperCase()}</span>
                </div>
                <div class="station-bitrate">${bitrate}</div>
            `;

            row.addEventListener('click', () => {
                document.querySelectorAll('.api-station-row').forEach(r => r.classList.remove('active-playing'));
                row.classList.add('active-playing');
                this.loadAndPlayStream(station.url_resolved, station.name);
            });

            this.stationsList.appendChild(row);
        });

        this.setEngineStatus('ONLINE', 'idle');
    }

    loadAndPlayStream(streamUrl, stationName) {
        this.currentActiveUrl = streamUrl;
        this.currentStationName.innerText = stationName.toUpperCase();

        this.dynamicPlayer.classList.remove('hidden');
        this.setEngineStatus('BUFFERING', 'loading');

        const currentVol = this.volumeRange.value;

        this.audio.src = streamUrl;
        
        this.audio.volume = currentVol / 100;
        this.volumeRange.value = currentVol;

        this.audio.play().catch(() => {
            this.setEngineStatus('BLOCKED', 'idle');
            this.playBtn.classList.remove('playing', 'loading');
        });
    }

    hookControls() {
        this.playBtn.addEventListener('click', () => {
            if (this.audio.paused) {
                this.audio.play().catch(() => this.playBtn.classList.remove('playing'));
            } else {
                this.audio.pause();
                this.playBtn.classList.remove('playing');
                this.setEngineStatus('PAUSED', 'idle');
            }
        });

        this.volumeRange.addEventListener('input', () => {
            this.audio.volume = this.volumeRange.value / 100;
        });
    }

    hookAudioEvents() {
        this.audio.addEventListener('playing', () => {
            this.playBtn.classList.remove('loading');
            this.playBtn.classList.add('playing');
            this.setEngineStatus('STREAMING', 'idle');
        });

        this.audio.addEventListener('waiting', () => {
            this.playBtn.classList.add('loading');
        });

        this.audio.addEventListener('error', () => {
            this.playBtn.classList.remove('playing', 'loading');
            this.setEngineStatus('LINK BROKEN', 'idle');
            this.showToast('Channel not available. | القناة غير متاحة', true);
        });
    }

    setEngineStatus(text, state = 'idle') {
        this.engineStatus.innerText = text;
        if (state === 'loading') {
            this.playBtn.classList.add('loading');
            this.engineStatus.style.color = '#00bfff';
        } else {
            this.engineStatus.style.color = '#00ffaa';
        }
    }

    showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast-message ${isError ? 'error-toast' : ''}`;
        toast.innerText = message;

        this.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastIn 0.3s ease reverse forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.geoEngine = new GeoRadioEngine();
});