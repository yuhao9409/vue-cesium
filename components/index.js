import { version } from '../package.json'
import CesiumViewer from './viewer/CesiumViewer.vue'
import SuperMapImageryLayer from './layers/SuperMapImageryLayer.vue'
import ArcGisMapServerImageryLayer from './layers/ArcGisMapServerImageryLayer.vue'
import BingMapsImageryLayer from './layers/BingMapsImageryLayer.vue'
import TiandituImageryLayer from './layers/TiandituImageryLayer.vue'
import UrlTemplateImageryLayer from './layers/UrlTemplateImageryLayer.vue'
import SingleTileImageryLayer from './layers/SingleTileImageryLayer.vue'
import MapboxImageryLayer from './layers/MapboxImageryLayer.vue'
import OpenStreetMapImageryLayer from './layers/OpenStreetMapImageryLayer.vue'
import Cesium3DTileset from './model/Cesium3DTileset.vue'

export default {
  install (Vue, options) {
    let cesiumPath
    if (options) {
      cesiumPath = options.cesiumPath
    } else {
      cesiumPath = 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
    }
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('cesium-viewer', CesiumViewer)
    Vue.component('supermap-imagery-layer', SuperMapImageryLayer)
    Vue.component('arcgis-imagery-layer', ArcGisMapServerImageryLayer)
    Vue.component('bingmaps-imagery-layer', BingMapsImageryLayer)
    Vue.component('tianditu-imagery-layer', TiandituImageryLayer)
    Vue.component('urltemplate-imagery-layer', UrlTemplateImageryLayer)
    Vue.component('singletile-imagery-layer', SingleTileImageryLayer)
    Vue.component('mapbox-imagery-layer', MapboxImageryLayer)
    Vue.component('openstreetmap-imagery-layer', OpenStreetMapImageryLayer)
    Vue.component('cesium-3dtileset', Cesium3DTileset)
  },
  version
}

export {
  CesiumViewer, SuperMapImageryLayer, ArcGisMapServerImageryLayer, BingMapsImageryLayer, TiandituImageryLayer, UrlTemplateImageryLayer,
  SingleTileImageryLayer, MapboxImageryLayer, OpenStreetMapImageryLayer, Cesium3DTileset
}
