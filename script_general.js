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
var script = {"start":"this.init()","minHeight":0,"id":"rootPlayer","minWidth":0,"data":{"locales":{"en":"locale/en.txt"},"history":{},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false},"defaultLocale":"en","name":"Player540","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"gap":10,"scripts":{"getMediaByTags":TDV.Tour.Script.getMediaByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"clone":TDV.Tour.Script.clone,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"startMeasurement":TDV.Tour.Script.startMeasurement,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPixels":TDV.Tour.Script.getPixels,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlays":TDV.Tour.Script.getOverlays,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"mixObject":TDV.Tour.Script.mixObject,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"init":TDV.Tour.Script.init,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleVR":TDV.Tour.Script.toggleVR,"setValue":TDV.Tour.Script.setValue,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"cloneBindings":TDV.Tour.Script.cloneBindings,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"downloadFile":TDV.Tour.Script.downloadFile,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizStart":TDV.Tour.Script.quizStart,"getKey":TDV.Tour.Script.getKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isPanorama":TDV.Tour.Script.isPanorama,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeJS":TDV.Tour.Script.executeJS,"initAnalytics":TDV.Tour.Script.initAnalytics,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"playAudioList":TDV.Tour.Script.playAudioList,"shareSocial":TDV.Tour.Script.shareSocial,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"enableVR":TDV.Tour.Script.enableVR,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizFinish":TDV.Tour.Script.quizFinish,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"disableVR":TDV.Tour.Script.disableVR,"translate":TDV.Tour.Script.translate,"registerKey":TDV.Tour.Script.registerKey,"showWindow":TDV.Tour.Script.showWindow,"createTween":TDV.Tour.Script.createTween,"setLocale":TDV.Tour.Script.setLocale},"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"hash": "51df7e2396b2a7210205440ea87b278b409723adf42d105021fbdc3acbe899b7", "definitions": [{"initialSequence":"this.sequence_04723B5D_0E9A_C30D_41A8_012EB15A9D63","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_02B42399_0E9A_C315_417C_51C6812DDE17_camera","enterPointingToHorizon":true},{"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"toolTipFontSize":"1.11vmin","playbackBarHeight":10,"surfaceReticleColor":"#FFFFFF","subtitlesGap":0,"progressOpacity":0.7,"playbackBarHeadWidth":6,"minHeight":50,"progressBarBackgroundColorDirection":"horizontal","minWidth":100,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"subtitlesBackgroundColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarRight":0,"toolTipPaddingLeft":6,"playbackBarProgressBorderRadius":0,"subtitlesFontSize":"3vmin","toolTipShadowColor":"#333138","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"propagateClick":false,"subtitlesBorderColor":"#FFFFFF","toolTipBorderColor":"#767676","vrPointerColor":"#FFFFFF","vrThumbstickRotationStep":20,"progressBackgroundColor":["#000000"],"progressBottom":10,"toolTipTextShadowColor":"#000000","progressHeight":2,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontFamily":"Arial","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":6,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"progressBorderRadius":2,"playbackBarHeadBorderColor":"#000000","id":"MainViewer","playbackBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"firstTransitionDuration":0,"progressLeft":"33%","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadShadow":true,"subtitlesTop":0,"playbackBarBottom":5,"height":"100%","subtitlesBottom":50,"width":"100%","toolTipPaddingTop":4,"progressRight":"33%","class":"ViewerArea"},{"items":[{"camera":"this.panorama_02B42399_0E9A_C315_417C_51C6812DDE17_camera","media":"this.panorama_02B42399_0E9A_C315_417C_51C6812DDE17","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"aaEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"class":"Panorama","data":{"label":"DSC05374-HDR Panorama Compressed"},"thumbnailUrl":"media/panorama_02B42399_0E9A_C315_417C_51C6812DDE17_t.webp","label":trans('panorama_02B42399_0E9A_C315_417C_51C6812DDE17.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_02B42399_0E9A_C315_417C_51C6812DDE17_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":18432,"url":"media/panorama_02B42399_0E9A_C315_417C_51C6812DDE17_0/{face}/0/{row}_{column}.webp","colCount":36,"height":3072,"rowCount":6,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"url":"media/panorama_02B42399_0E9A_C315_417C_51C6812DDE17_0/{face}/1/{row}_{column}.webp","colCount":18,"height":1536,"rowCount":3,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"url":"media/panorama_02B42399_0E9A_C315_417C_51C6812DDE17_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"rowCount":2,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_02B42399_0E9A_C315_417C_51C6812DDE17_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"hfov":360,"vfov":180,"hfovMin":"120%","id":"panorama_02B42399_0E9A_C315_417C_51C6812DDE17"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_04723B5D_0E9A_C30D_41A8_012EB15A9D63"}],"scrollBarColor":"#000000","width":"100%","scrollBarMargin":2,"watermark":false,"height":"100%","children":["this.MainViewer"],"layout":"absolute","class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Feb 16 2025