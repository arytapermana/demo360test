(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"watermark":false,"children":["this.MainViewer"],"minHeight":0,"id":"rootPlayer","minWidth":0,"data":{"locales":{"en":"locale/en.txt"},"history":{},"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false},"name":"Player540","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"gap":10,"scripts":{"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"clone":TDV.Tour.Script.clone,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPixels":TDV.Tour.Script.getPixels,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoForward":TDV.Tour.Script.historyGoForward,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"mixObject":TDV.Tour.Script.mixObject,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"init":TDV.Tour.Script.init,"enableVR":TDV.Tour.Script.enableVR,"isPanorama":TDV.Tour.Script.isPanorama,"setValue":TDV.Tour.Script.setValue,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"toggleVR":TDV.Tour.Script.toggleVR,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeJS":TDV.Tour.Script.executeJS,"registerKey":TDV.Tour.Script.registerKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMainViewer":TDV.Tour.Script.getMainViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"playAudioList":TDV.Tour.Script.playAudioList,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"downloadFile":TDV.Tour.Script.downloadFile,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showWindow":TDV.Tour.Script.showWindow,"quizFinish":TDV.Tour.Script.quizFinish,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"disableVR":TDV.Tour.Script.disableVR,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"textToSpeech":TDV.Tour.Script.textToSpeech,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"translate":TDV.Tour.Script.translate,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"resumePlayers":TDV.Tour.Script.resumePlayers,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"createTween":TDV.Tour.Script.createTween,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios},"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarColor":"#000000","width":"100%","hash": "08647fa77973c99795c6a9d48d00245703c83add5805d94a414a361b638c53a2", "definitions": [{"items":[{"camera":"this.panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_camera","media":"this.panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"aaEnabled":true,"displayPlaybackBar":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"hfovMin":"120%","label":trans('panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F.label'),"hfov":360,"hfovMax":130,"id":"panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F","data":{"label":"DSC05374-HDR Panorama Compressed"},"class":"Panorama","thumbnailUrl":"media/panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_t.webp","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_t.webp","cube":{"class":"ImageResource","levels":[{"rowCount":6,"width":18432,"url":"media/panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_0/{face}/0/{row}_{column}.webp","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","colCount":36},{"rowCount":3,"width":9216,"url":"media/panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_0/{face}/1/{row}_{column}.webp","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","colCount":18},{"rowCount":2,"width":6144,"url":"media/panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_0/{face}/2/{row}_{column}.webp","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":12},{"rowCount":1,"width":3072,"url":"media/panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_0/{face}/3/{row}_{column}.webp","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6}]}}],"vfov":180},{"initialSequence":"this.sequence_04723B5D_0E9A_C30D_41A8_012EB15A9D63","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_15FE7A09_18BE_A3B6_41AF_4D59829AE06F_camera"},{"playbackBarBottom":5,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"toolTipFontSize":"1.11vmin","playbackBarBackgroundColor":["#FFFFFF"],"minHeight":50,"minWidth":100,"data":{"name":"Main Viewer"},"playbackBarHeight":10,"progressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"toolTipPaddingLeft":6,"progressRight":"33%","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"progressOpacity":0.7,"playbackBarRight":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBorderRadius":0,"progressBarBorderColor":"#000000","subtitlesTop":0,"subtitlesBottom":50,"playbackBarProgressBackgroundColor":["#3399FF"],"propagateClick":false,"subtitlesGap":0,"toolTipBorderColor":"#767676","vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","vrThumbstickRotationStep":20,"progressBackgroundColor":["#000000"],"subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","progressBottom":10,"playbackBarBorderColor":"#FFFFFF","progressHeight":2,"progressBarBorderRadius":2,"playbackBarBorderRadius":0,"progressBorderSize":0,"progressBarBorderSize":0,"id":"MainViewer","subtitlesBorderColor":"#FFFFFF","firstTransitionDuration":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":2,"toolTipFontFamily":"Arial","subtitlesTextShadowOpacity":1,"playbackBarHeadHeight":15,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"progressLeft":"33%","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","toolTipPaddingBottom":4,"playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","width":"100%","toolTipPaddingTop":4,"surfaceReticleColor":"#FFFFFF","vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"height":"100%"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_04723B5D_0E9A_C30D_41A8_012EB15A9D63"}],"backgroundColorRatios":[0],"class":"Player","scrollBarMargin":2,"height":"100%","start":"this.init()","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Tue Feb 18 2025