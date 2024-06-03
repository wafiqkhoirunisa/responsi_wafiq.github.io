// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/request dojo/json dojo/topic dojo/_base/lang esri/arcgis/Portal esri/layers/FeatureLayer jimu/LayerInfos/LayerInfos jimu/utils dojo/_base/array".split(" "),function(n,v,b,d,B,w,x,m,p){var z={saveToPortal:function(a){(new B.Portal(a.appConfig.portalUrl)).signIn().then(d.hitch(this,function(c){var e=c.credential.token,h=c.orgId,q=c.username;if("org_user"===c.role)a.publishMessage.innerHTML=m.sanitizeHTML(a.nls.createService.format(a.nls.userRole)),b.publish("setLastFocusNode",!1);else if(a.url){var r;
p.forEach(a.layers,d.hitch(this,function(t,g){r=new w(a.url+"?token\x3d"+e,{id:a.layerName+""+g,outFields:["*"]});r._wabProperties={itemLayerInfo:{portalUrl:a.appConfig.portalUrl,itemId:a.itemId}};r.applyEdits(t.graphics,null,null).then(d.hitch(this,function(){b.publish("clear")})).otherwise(d.hitch(this,function(){b.publish("clear")}))}));b.publish("setBusyIndicator",!1);a.publishMessage.innerHTML=a.nls.successfullyAppended+('\x3cbr /\x3e\x3ca role\x3d"link" tabindex\x3d"0" aria-label\x3d"'+a.nls.successfullyAppended+
'" href\x3d"'+a.appConfig.portalUrl+"home/item.html?id\x3d"+a.serviceItemId+'" target\x3d"_blank"\x3e'+a.nls.manageWebLayerText+"\x3c/a\x3e");b.publish("setLastFocusNode",!0)}else{var C=a.appConfig.portalUrl+"sharing/content/users/"+q+"/createService";this.isNameAvailable(a.appConfig.portalUrl+"sharing/rest/portals/"+h+"/isServiceNameAvailable",e,a.layerName).then(d.hitch(this,function(t){t.available?(b.publish("setBusyIndicator",!0),this.createFeatureService(C,e,this.getFeatureServiceParams(a.layerName,
a.map)).then(d.hitch(this,function(g){if(g.success){var D=g.serviceurl.replace(RegExp("rest","g"),"rest/admin")+"/addToDefinition",y=[];p.forEach(a.layers,d.hitch(this,function(f,k){f=z.getLayerParams(f.name,a.map,f.renderer,a.nls,k);y.push(f)}));this.addDefinitionToService(D,e,{layers:y}).then(d.hitch(this,function(f){f&&f.success&&(p.forEach(f.layers,d.hitch(this,function(k,A){if(k){var l=new w(g.serviceurl+"/"+A+"?token\x3d"+e,{id:k.name,outFields:["*"]});l._wabProperties={itemLayerInfo:{portalUrl:a.appConfig.portalUrl,
itemId:g.itemId}};a.map.addLayer(l);if(l.loaded){var u=x.getInstanceSync().getLayerInfoById(k.name);u.enablePopup()}else l.on("load",d.hitch(this,function(){u=x.getInstanceSync().getLayerInfoById(k.name);u.enablePopup()}));l.applyEdits(a.layers[A].graphics,null,null).then(d.hitch(this,function(){b.publish("clear")})).otherwise(d.hitch(this,function(){b.publish("clear")}))}})),b.publish("setBusyIndicator",!1),a.publishMessage.innerHTML=a.nls.successfullyPublished+('\x3cbr /\x3e\x3ca role\x3d"link" tabindex\x3d"0" aria-label\x3d"'+
a.nls.successfullyPublished+'" href\x3d"'+a.appConfig.portalUrl+"home/item.html?id\x3d"+g.itemId+'" target\x3d"_blank"\x3e'+a.nls.manageWebLayerText+"\x3c/a\x3e"),b.publish("setLastFocusNode",!0))}),d.hitch(this,function(f){b.publish("setBusyIndicator",!1);a.publishMessage.innerHTML=m.sanitizeHTML(a.nls.addToDefinition.format(f.message));b.publish("setLastFocusNode",!1)}))}else b.publish("setBusyIndicator",!1),a.publishMessage.innerHTML=m.sanitizeHTML(a.nls.unableToCreate.format(a.layerName)),b.publish("setLastFocusNode",
!1)}),d.hitch(this,function(g){b.publish("setBusyIndicator",!1);a.publishMessage.innerHTML=m.sanitizeHTML(a.nls.createService.format(g.message));b.publish("setLastFocusNode",!1)}))):(b.publish("setBusyIndicator",!1),a.publishMessage.innerHTML=a.nls.layerNameExists);b.publish("setLastFocusNode",!1)}))}}),d.hitch(this,function(c){a.publishMessage.innerHTML=c.message;b.publish("setLastFocusNode",!1)}))},getFeatureServiceParams:function(a,c){return{name:a,serviceDescription:"",hasStaticData:!1,maxRecordCount:1E3,
supportedQueryFormats:"JSON",capabilities:"Create,Delete,Query,Update,Editing",tags:"ThreatAnalysis",description:"",copyrightText:"",spatialReference:c.spatialReference.toJson(),initialExtent:c.extent.toJson(),allowGeometryUpdates:!0,units:"esriMeters",xssPreventionInfo:{xssPreventionEnabled:!0,xssPreventionRule:"InputOnly",xssInputRule:"rejectInvalid"}}},getLayerParams:function(a,c,e,h,q){return{adminLayerInfo:{geometryField:{name:"Shape"},xssTrustedFields:""},id:q,name:a,type:"Feature Layer",displayField:"",
description:"",tags:"ThreatAnalysis",copyrightText:"",defaultVisibility:!0,ownershipBasedAccessControlForFeatures:{allowOthersToQuery:!1,allowOthersToDelete:!1,allowOthersToUpdate:!1},relationships:[],isDataVersioned:!1,supportsCalculate:!0,supportsAttachmentsByUploadId:!0,supportsRollbackOnFailureParameter:!0,supportsStatistics:!0,supportsAdvancedQueries:!0,supportsValidateSql:!0,supportsCoordinatesQuantization:!0,supportsApplyEditsWithGlobalIds:!0,advancedQueryCapabilities:{supportsPagination:!0,
supportsQueryWithDistance:!0,supportsReturningQueryExtent:!0,supportsStatistics:!0,supportsOrderBy:!0,supportsDistinct:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsReturningGeometryCentroid:!0},useStandardizedQueries:!1,geometryType:"esriGeometryPolygon",minScale:0,maxScale:0,extent:c.extent,drawingInfo:{renderer:e.toJson(),transparency:0},allowGeometryUpdates:!0,hasAttachments:!1,htmlPopupType:"esriServerHTMLPopupTypeNone",hasM:!1,hasZ:!1,objectIdField:"OBJECTID",globalIdField:"",
typeIdField:"",fields:[{name:"OBJECTID",type:"esriFieldTypeOID",actualType:"int",alias:"OBJECTID",sqlType:"sqlTypeOther",nullable:!1,editable:!1,domain:null,defaultValue:null},{name:"zone_type",type:"esriFieldTypeString",alias:h.zoneTypeLabel,actualType:"nvarchar",nullable:!0,editable:!0,domain:null,defaultValue:null,sqlType:"sqlTypeNVarchar",length:256},{name:"threat_type",type:"esriFieldTypeString",alias:h.threatType,actualType:"nvarchar",nullable:!0,editable:!0,domain:null,defaultValue:null,sqlType:"sqlTypeNVarchar",
length:256},{name:"distance",type:"esriFieldTypeDouble",alias:h.distanceColLabel,actualType:"float",nullable:!0,editable:!0,domain:null,defaultValue:null,sqlType:"sqlTypeFloat"},{name:"units",type:"esriFieldTypeString",alias:h.unitsLabel,actualType:"nvarchar",nullable:!0,editable:!0,domain:null,defaultValue:null,sqlType:"sqlTypeNVarchar",length:256}],indexes:[],types:[],templates:[{name:"New Feature",description:"",drawingTool:"esriFeatureEditToolPolygon",prototype:{attributes:{}}}],supportedQueryFormats:"JSON",
hasStaticData:!1,maxRecordCount:1E4,standardMaxRecordCount:4E3,tileMaxRecordCount:4E3,maxRecordCountFactor:1,exceedsLimitFactor:1,capabilities:"Query,Editing,Create,Update,Delete"}},isNameAvailable:function(a,c,e){return n({url:a,content:{name:e,type:"Feature Service",token:c,f:"json"},handleAs:"json",callbackParamName:"callback"},{usePost:!0})},createFeatureService:function(a,c,e){return n({url:a,content:{f:"json",token:c,typeKeywords:"ArcGIS Server,Data,Feature Access,Feature Service,Service,Hosted Service",
createParameters:v.stringify(e),outputType:"featureService"},handleAs:"json",callbackParamName:"callback"},{usePost:!0})},addDefinitionToService:function(a,c,e){return n({url:a,content:{token:c,addToDefinition:v.stringify(e),f:"json"},handleAs:"json",callbackParamName:"callback"},{usePost:!0})}};return z});