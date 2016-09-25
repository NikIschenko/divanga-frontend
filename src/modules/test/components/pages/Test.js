import React from 'react';
import '../../media/styles/index.scss';
import Spinner from '../../../app/components/elements/Spinner';
import Checkbox from '../../../app/components/elements/Checkbox';
import RadioList from '../../../app/components/elements/RadioList';
import Toggle from '../../../app/components/elements/Toggle';

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentRadioListCheck: 1, toggleOn: 1 }
  };

  checkRadioList = (value) => {
    this.setState({ currentRadioListCheck: value});
  };

  toggleClick = () => {
    this.setState({ toggleOn: !this.state.toggleOn });
  };

  render() {
    return (
      <div className="row column">
        <h1 className="font-w800">DANA & DANY</h1>
        <br/>
        <br/>
        <strong className="to-upper">All h* tags by default has font-family 'Gotham', font-weight: normal</strong>
        <h1>This is default h1 tag</h1>
        <h2>This is default h2 tag</h2>
        <h3>This is default h3 tag</h3>
        <h4>This is default h4 tag</h4>
        <h5>This is default h5 tag</h5>
        <h6>This is default h6 tag</h6>
        <br/>
        <br/>
        <strong className="to-upper"> h* tags with helper class "font-lustria"</strong>
        <h1 className="font-lustria">This is default h1 tag</h1>
        <h2 className="font-lustria reset-margin">h2 tag without margin (reset-margin)</h2>
        <h3 className="font-lustria font-w800">h3 tag and bold class (font-w700)</h3>
        <h4 className="font-lustria to-upper">h4 in uppercase (to-upper)</h4>
        <h5 className="font-lustria to-cap">h5 with capitalize (to-cap)</h5>
        <h6 className="font-lustria">This is default h6 tag</h6>
        <br/>
        <br/>
        <strong className="to-upper">Colorize text</strong>
        <p className="text-gray">text-gray</p>
        <p className="text-default">text-default</p>
        <p className="text-primary">text-primary</p>
        <p className="text-danger">text-danger</p>
        <p className="text-black">text-black</p>
        <br/>
        <br/>
        <strong className="to-upper">Buttons</strong>
        <div>
          <br/>
          <button className="button">button</button>
          <button className="button white">button white</button>
        </div>
        <div>
          <br/>
          <button className="button radius">button radius</button>
          <button className="button radius white">button radius white</button>
        </div>
        <div>
          <br/>
          <button className="button round">button round</button>
          <button className="button round white">button round white</button>
        </div>
        <div>
          <br/>
          <button className="button big radius">button big radius</button>
          <button className="button big radius white">button big radius white</button>
        </div>
        <div>
          <br/>
          <button className="button expanded">button expanded</button>
          <button className="button expanded white">button expanded white</button>
        </div>
        <div>
          <br/>
          <button className="button white stroked">button white stroked</button>
          <button className="button white stroked radius">button white stroked radius</button>
          <button className="button white stroked round">button white stroked round</button>
        </div>
        <br/>
        <br/>
        <br/>
        <strong className="to-upper">Default text</strong>
        <p>Default text has size that set on <strong>$font-size-default</strong> variable.</p>
        <p>
          In publishing and graphic design, lorem ipsum (derived from Latin dolorem ipsum, translated as "pain itself")
          is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation.
          Replacing meaningful content with placeholder text allows viewers to focus on graphic aspects such as font,
          typography, and page layout without being distracted by the content. It also reduces the need for the designer
          to come up with meaningful text, as they can instead use quickly-generated lorem ipsum.[citation needed]
        </p>
        <p>
          The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin
          text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.
        </p>
        <br/>
        <br/>
        <div className="row">
          <div className="columns medium-6">
            <strong className="to-upper">Checkbox</strong>
            <Checkbox>Some text for checkbox</Checkbox>
          </div>
          <div className="columns medium-6">
            <div className="columns medium-12">
              <strong className="to-upper">Toggle</strong>
            </div>
            <div className="columns medium-12">
              <Toggle on={this.state.toggleOn} label="Some label" click={this.toggleClick}/>
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <strong className="to-upper">RadioList</strong>
        <RadioList
          radios={
            [
              { label: 'First radio', value: 1 },
              { label: 'Second radio', value: 2 },
              { label: 'Third radio', value: 3 }
              ]
          }
          checked={this.state.currentRadioListCheck}
          check={ this.checkRadioList }
        />
        <br/>
        <br/>
        <strong className="to-upper">Spinner</strong>
        <p>By default "Spinner" look like this: <br/>Warning! Spinner need to wrap by tag with relative position, because it's centered by parent tag</p>
        <div style={{position: 'relative'}}>
          <br/>
          <br/>
          <Spinner />
          <br/>
          <br/>
        </div>
        <p>You can setting your spinner with props <b>radius</b> and <b>width</b>, and position by class <b>text-left, text-right, text-center (by default)</b> </p>
        <div style={{position: 'relative'}}>
          <br/>
          <br/>
          <Spinner className="text-left" radius="30" width={10} />
          <Spinner radius="100px" width={10} />
          <Spinner className="text-right" radius="30" width={2} />
          <br/>
          <br/>
        </div>





        <br/>
        <br/>
        <strong>Simple-line-icons</strong>
        <div className="row text-center small-up-6 icon-list">
          <div className="columns">
            <p><i className="si si-action-redo fa-2x"></i></p>
            <div>si-action-redo</div>
          </div>
          <div className="columns">
            <p><i className="si si-action-undo fa-2x"></i></p>
            <div>si-action-undo</div>
          </div>
          <div className="columns">
            <p><i className="si si-anchor fa-2x"></i></p>
            <div>si-anchor</div>
          </div>
          <div className="columns">
            <p><i className="si si-arrow-down fa-2x"></i></p>
            <div>si-arrow-down</div>
          </div>
          <div className="columns">
            <p><i className="si si-arrow-left fa-2x"></i></p>
            <div>si-arrow-left</div>
          </div>
          <div className="columns">
            <p><i className="si si-arrow-right fa-2x"></i></p>
            <div>si-arrow-right</div>
          </div>
          <div className="columns">
            <p><i className="si si-arrow-up fa-2x"></i></p>
            <div>si-arrow-up</div>
          </div>
          <div className="columns">
            <p><i className="si si-badge fa-2x"></i></p>
            <div>si-badge</div>
          </div>
          <div className="columns">
            <p><i className="si si-bag fa-2x"></i></p>
            <div>si-bag</div>
          </div>
          <div className="columns">
            <p><i className="si si-ban fa-2x"></i></p>
            <div>si-ban</div>
          </div>
          <div className="columns">
            <p><i className="si si-bar-chart fa-2x"></i></p>
            <div>si-bar-chart</div>
          </div>
          <div className="columns">
            <p><i className="si si-basket fa-2x"></i></p>
            <div>si-basket</div>
          </div>
          <div className="columns">
            <p><i className="si si-basket-loaded fa-2x"></i></p>
            <div>si-basket-loaded</div>
          </div>
          <div className="columns">
            <p><i className="si si-bell fa-2x"></i></p>
            <div>si-bell</div>
          </div>
          <div className="columns">
            <p><i className="si si-book-open fa-2x"></i></p>
            <div>si-book-open</div>
          </div>
          <div className="columns">
            <p><i className="si si-briefcase fa-2x"></i></p>
            <div>si-briefcase</div>
          </div>
          <div className="columns">
            <p><i className="si si-bubble fa-2x"></i></p>
            <div>si-bubble</div>
          </div>
          <div className="columns">
            <p><i className="si si-bubbles fa-2x"></i></p>
            <div>si-bubbles</div>
          </div>
          <div className="columns">
            <p><i className="si si-bulb fa-2x"></i></p>
            <div>si-bulb</div>
          </div>
          <div className="columns">
            <p><i className="si si-calculator fa-2x"></i></p>
            <div>si-calculator</div>
          </div>
          <div className="columns">
            <p><i className="si si-calendar fa-2x"></i></p>
            <div>si-calendar</div>
          </div>
          <div className="columns">
            <p><i className="si si-call-end fa-2x"></i></p>
            <div>si-call-end</div>
          </div>
          <div className="columns">
            <p><i className="si si-call-in fa-2x"></i></p>
            <div>si-call-in</div>
          </div>
          <div className="columns">
            <p><i className="si si-call-out fa-2x"></i></p>
            <div>si-call-out</div>
          </div>
          <div className="columns">
            <p><i className="si si-camcorder fa-2x"></i></p>
            <div>si-camcorder</div>
          </div>
          <div className="columns">
            <p><i className="si si-camera fa-2x"></i></p>
            <div>si-camera</div>
          </div>
          <div className="columns">
            <p><i className="si si-check fa-2x"></i></p>
            <div>si-check</div>
          </div>
          <div className="columns">
            <p><i className="si si-chemistry fa-2x"></i></p>
            <div>si-chemistry</div>
          </div>
          <div className="columns">
            <p><i className="si si-clock fa-2x"></i></p>
            <div>si-clock</div>
          </div>
          <div className="columns">
            <p><i className="si si-close fa-2x"></i></p>
            <div>si-close</div>
          </div>
          <div className="columns">
            <p><i className="si si-cloud-download fa-2x"></i></p>
            <div>si-cloud-download</div>
          </div>
          <div className="columns">
            <p><i className="si si-cloud-upload fa-2x"></i></p>
            <div>si-cloud-upload</div>
          </div>
          <div className="columns">
            <p><i className="si si-compass fa-2x"></i></p>
            <div>si-compass</div>
          </div>
          <div className="columns">
            <p><i className="si si-control-end fa-2x"></i></p>
            <div>si-control-end</div>
          </div>
          <div className="columns">
            <p><i className="si si-control-forward fa-2x"></i></p>
            <div>si-control-forward</div>
          </div>
          <div className="columns">
            <p><i className="si si-control-pause fa-2x"></i></p>
            <div>si-control-pause</div>
          </div>
          <div className="columns">
            <p><i className="si si-control-play fa-2x"></i></p>
            <div>si-control-play</div>
          </div>
          <div className="columns">
            <p><i className="si si-control-rewind fa-2x"></i></p>
            <div>si-control-rewind</div>
          </div>
          <div className="columns">
            <p><i className="si si-control-start fa-2x"></i></p>
            <div>si-control-start</div>
          </div>
          <div className="columns">
            <p><i className="si si-credit-card fa-2x"></i></p>
            <div>si-credit-card</div>
          </div>
          <div className="columns">
            <p><i className="si si-crop fa-2x"></i></p>
            <div>si-crop</div>
          </div>
          <div className="columns">
            <p><i className="si si-cup fa-2x"></i></p>
            <div>si-cup</div>
          </div>
          <div className="columns">
            <p><i className="si si-cursor fa-2x"></i></p>
            <div>si-cursor</div>
          </div>
          <div className="columns">
            <p><i className="si si-cursor-move fa-2x"></i></p>
            <div>si-cursor-move</div>
          </div>
          <div className="columns">
            <p><i className="si si-diamond fa-2x"></i></p>
            <div>si-diamond</div>
          </div>
          <div className="columns">
            <p><i className="si si-direction fa-2x"></i></p>
            <div>si-direction</div>
          </div>
          <div className="columns">
            <p><i className="si si-directions fa-2x"></i></p>
            <div>si-directions</div>
          </div>
          <div className="columns">
            <p><i className="si si-disc fa-2x"></i></p>
            <div>si-disc</div>
          </div>
          <div className="columns">
            <p><i className="si si-dislike fa-2x"></i></p>
            <div>si-dislike</div>
          </div>
          <div className="columns">
            <p><i className="si si-doc fa-2x"></i></p>
            <div>si-doc</div>
          </div>
          <div className="columns">
            <p><i className="si si-docs fa-2x"></i></p>
            <div>si-docs</div>
          </div>
          <div className="columns">
            <p><i className="si si-drawer fa-2x"></i></p>
            <div>si-drawer</div>
          </div>
          <div className="columns">
            <p><i className="si si-drop fa-2x"></i></p>
            <div>si-drop</div>
          </div>
          <div className="columns">
            <p><i className="si si-earphones fa-2x"></i></p>
            <div>si-earphones</div>
          </div>
          <div className="columns">
            <p><i className="si si-earphones-alt fa-2x"></i></p>
            <div>si-earphones-alt</div>
          </div>
          <div className="columns">
            <p><i className="si si-emoticon-smile fa-2x"></i></p>
            <div>si-emoticon-smile</div>
          </div>
          <div className="columns">
            <p><i className="si si-energy fa-2x"></i></p>
            <div>si-energy</div>
          </div>
          <div className="columns">
            <p><i className="si si-envelope fa-2x"></i></p>
            <div>si-envelope</div>
          </div>
          <div className="columns">
            <p><i className="si si-envelope-letter fa-2x"></i></p>
            <div>si-envelope-letter</div>
          </div>
          <div className="columns">
            <p><i className="si si-envelope-open fa-2x"></i></p>
            <div>si-envelope-open</div>
          </div>
          <div className="columns">
            <p><i className="si si-equalizer fa-2x"></i></p>
            <div>si-equalizer</div>
          </div>
          <div className="columns">
            <p><i className="si si-eye fa-2x"></i></p>
            <div>si-eye</div>
          </div>
          <div className="columns">
            <p><i className="si si-eyeglasses fa-2x"></i></p>
            <div>si-eyeglasses</div>
          </div>
          <div className="columns">
            <p><i className="si si-feed fa-2x"></i></p>
            <div>si-feed</div>
          </div>
          <div className="columns">
            <p><i className="si si-film fa-2x"></i></p>
            <div>si-film</div>
          </div>
          <div className="columns">
            <p><i className="si si-fire fa-2x"></i></p>
            <div>si-fire</div>
          </div>
          <div className="columns">
            <p><i className="si si-flag fa-2x"></i></p>
            <div>si-flag</div>
          </div>
          <div className="columns">
            <p><i className="si si-folder fa-2x"></i></p>
            <div>si-folder</div>
          </div>
          <div className="columns">
            <p><i className="si si-folder-alt fa-2x"></i></p>
            <div>si-folder-alt</div>
          </div>
          <div className="columns">
            <p><i className="si si-frame fa-2x"></i></p>
            <div>si-frame</div>
          </div>
          <div className="columns">
            <p><i className="si si-game-controller fa-2x"></i></p>
            <div>si-game-controller</div>
          </div>
          <div className="columns">
            <p><i className="si si-ghost fa-2x"></i></p>
            <div>si-ghost</div>
          </div>
          <div className="columns">
            <p><i className="si si-globe fa-2x"></i></p>
            <div>si-globe</div>
          </div>
          <div className="columns">
            <p><i className="si si-globe-alt fa-2x"></i></p>
            <div>si-globe-alt</div>
          </div>
          <div className="columns">
            <p><i className="si si-graduation fa-2x"></i></p>
            <div>si-graduation</div>
          </div>
          <div className="columns">
            <p><i className="si si-graph fa-2x"></i></p>
            <div>si-graph</div>
          </div>
          <div className="columns">
            <p><i className="si si-grid fa-2x"></i></p>
            <div>si-grid</div>
          </div>
          <div className="columns">
            <p><i className="si si-handbag fa-2x"></i></p>
            <div>si-handbag</div>
          </div>
          <div className="columns">
            <p><i className="si si-heart fa-2x"></i></p>
            <div>si-heart</div>
          </div>
          <div className="columns">
            <p><i className="si si-home fa-2x"></i></p>
            <div>si-home</div>
          </div>
          <div className="columns">
            <p><i className="si si-hourglass fa-2x"></i></p>
            <div>si-hourglass</div>
          </div>
          <div className="columns">
            <p><i className="si si-info fa-2x"></i></p>
            <div>si-info</div>
          </div>
          <div className="columns">
            <p><i className="si si-key fa-2x"></i></p>
            <div>si-key</div>
          </div>
          <div className="columns">
            <p><i className="si si-layers fa-2x"></i></p>
            <div>si-layers</div>
          </div>
          <div className="columns">
            <p><i className="si si-like fa-2x"></i></p>
            <div>si-like</div>
          </div>
          <div className="columns">
            <p><i className="si si-link fa-2x"></i></p>
            <div>si-link</div>
          </div>
          <div className="columns">
            <p><i className="si si-list fa-2x"></i></p>
            <div>si-list</div>
          </div>
          <div className="columns">
            <p><i className="si si-lock fa-2x"></i></p>
            <div>si-lock</div>
          </div>
          <div className="columns">
            <p><i className="si si-lock-open fa-2x"></i></p>
            <div>si-lock-open</div>
          </div>
          <div className="columns">
            <p><i className="si si-login fa-2x"></i></p>
            <div>si-login</div>
          </div>
          <div className="columns">
            <p><i className="si si-logout fa-2x"></i></p>
            <div>si-logout</div>
          </div>
          <div className="columns">
            <p><i className="si si-loop fa-2x"></i></p>
            <div>si-loop</div>
          </div>
          <div className="columns">
            <p><i className="si si-magic-wand fa-2x"></i></p>
            <div>si-magic-wand</div>
          </div>
          <div className="columns">
            <p><i className="si si-magnet fa-2x"></i></p>
            <div>si-magnet</div>
          </div>
          <div className="columns">
            <p><i className="si si-magnifier fa-2x"></i></p>
            <div>si-magnifier</div>
          </div>
          <div className="columns">
            <p><i className="si si-magnifier-add fa-2x"></i></p>
            <div>si-magnifier-add</div>
          </div>
          <div className="columns">
            <p><i className="si si-magnifier-remove fa-2x"></i></p>
            <div>si-magnifier-remove</div>
          </div>
          <div className="columns">
            <p><i className="si si-map fa-2x"></i></p>
            <div>si-map</div>
          </div>
          <div className="columns">
            <p><i className="si si-microphone fa-2x"></i></p>
            <div>si-microphone</div>
          </div>
          <div className="columns">
            <p><i className="si si-mouse fa-2x"></i></p>
            <div>si-mouse</div>
          </div>
          <div className="columns">
            <p><i className="si si-moustache fa-2x"></i></p>
            <div>si-moustache</div>
          </div>
          <div className="columns">
            <p><i className="si si-music-tone fa-2x"></i></p>
            <div>si-music-tone</div>
          </div>
          <div className="columns">
            <p><i className="si si-music-tone-alt fa-2x"></i></p>
            <div>si-music-tone-alt</div>
          </div>
          <div className="columns">
            <p><i className="si si-note fa-2x"></i></p>
            <div>si-note</div>
          </div>
          <div className="columns">
            <p><i className="si si-notebook fa-2x"></i></p>
            <div>si-notebook</div>
          </div>
          <div className="columns">
            <p><i className="si si-paper-clip fa-2x"></i></p>
            <div>si-paper-clip</div>
          </div>
          <div className="columns">
            <p><i className="si si-paper-plane fa-2x"></i></p>
            <div>si-paper-plane</div>
          </div>
          <div className="columns">
            <p><i className="si si-pencil fa-2x"></i></p>
            <div>si-pencil</div>
          </div>
          <div className="columns">
            <p><i className="si si-picture fa-2x"></i></p>
            <div>si-picture</div>
          </div>
          <div className="columns">
            <p><i className="si si-pie-chart fa-2x"></i></p>
            <div>si-pie-chart</div>
          </div>
          <div className="columns">
            <p><i className="si si-pin fa-2x"></i></p>
            <div>si-pin</div>
          </div>
          <div className="columns">
            <p><i className="si si-plane fa-2x"></i></p>
            <div>si-plane</div>
          </div>
          <div className="columns">
            <p><i className="si si-playlist fa-2x"></i></p>
            <div>si-playlist</div>
          </div>
          <div className="columns">
            <p><i className="si si-plus fa-2x"></i></p>
            <div>si-plus</div>
          </div>
          <div className="columns">
            <p><i className="si si-pointer fa-2x"></i></p>
            <div>si-pointer</div>
          </div>
          <div className="columns">
            <p><i className="si si-power fa-2x"></i></p>
            <div>si-power</div>
          </div>
          <div className="columns">
            <p><i className="si si-present fa-2x"></i></p>
            <div>si-present</div>
          </div>
          <div className="columns">
            <p><i className="si si-printer fa-2x"></i></p>
            <div>si-printer</div>
          </div>
          <div className="columns">
            <p><i className="si si-puzzle fa-2x"></i></p>
            <div>si-puzzle</div>
          </div>
          <div className="columns">
            <p><i className="si si-question fa-2x"></i></p>
            <div>si-question</div>
          </div>
          <div className="columns">
            <p><i className="si si-refresh fa-2x"></i></p>
            <div>si-refresh</div>
          </div>
          <div className="columns">
            <p><i className="si si-reload fa-2x"></i></p>
            <div>si-reload</div>
          </div>
          <div className="columns">
            <p><i className="si si-rocket fa-2x"></i></p>
            <div>si-rocket</div>
          </div>
          <div className="columns">
            <p><i className="si si-screen-desktop fa-2x"></i></p>
            <div>si-screen-desktop</div>
          </div>
          <div className="columns">
            <p><i className="si si-screen-smartphone fa-2x"></i></p>
            <div>si-screen-smartphone</div>
          </div>
          <div className="columns">
            <p><i className="si si-screen-tablet fa-2x"></i></p>
            <div>si-screen-tablet</div>
          </div>
          <div className="columns">
            <p><i className="si si-settings fa-2x"></i></p>
            <div>si-settings</div>
          </div>
          <div className="columns">
            <p><i className="si si-share fa-2x"></i></p>
            <div>si-share</div>
          </div>
          <div className="columns">
            <p><i className="si si-share-alt fa-2x"></i></p>
            <div>si-share-alt</div>
          </div>
          <div className="columns">
            <p><i className="si si-shield fa-2x"></i></p>
            <div>si-shield</div>
          </div>
          <div className="columns">
            <p><i className="si si-shuffle fa-2x"></i></p>
            <div>si-shuffle</div>
          </div>
          <div className="columns">
            <p><i className="si si-size-actual fa-2x"></i></p>
            <div>si-size-actual</div>
          </div>
          <div className="columns">
            <p><i className="si si-size-fullscreen fa-2x"></i></p>
            <div>si-size-fullscreen</div>
          </div>
          <div className="columns">
            <p><i className="si si-social-dribbble fa-2x"></i></p>
            <div>si-social-dribbble</div>
          </div>
          <div className="columns">
            <p><i className="si si-social-dropbox fa-2x"></i></p>
            <div>si-social-dropbox</div>
          </div>
          <div className="columns">
            <p><i className="si si-social-facebook fa-2x"></i></p>
            <div>si-social-facebook</div>
          </div>
          <div className="columns">
            <p><i className="si si-social-tumblr fa-2x"></i></p>
            <div>si-social-tumblr</div>
          </div>
          <div className="columns">
            <p><i className="si si-social-twitter fa-2x"></i></p>
            <div>si-social-twitter</div>
          </div>
          <div className="columns">
            <p><i className="si si-social-youtube fa-2x"></i></p>
            <div>si-social-youtube</div>
          </div>
          <div className="columns">
            <p><i className="si si-speech fa-2x"></i></p>
            <div>si-speech</div>
          </div>
          <div className="columns">
            <p><i className="si si-speedometer fa-2x"></i></p>
            <div>si-speedometer</div>
          </div>
          <div className="columns">
            <p><i className="si si-star fa-2x"></i></p>
            <div>si-star</div>
          </div>
          <div className="columns">
            <p><i className="si si-support fa-2x"></i></p>
            <div>si-support</div>
          </div>
          <div className="columns">
            <p><i className="si si-symbol-female fa-2x"></i></p>
            <div>si-symbol-female</div>
          </div>
          <div className="columns">
            <p><i className="si si-symbol-male fa-2x"></i></p>
            <div>si-symbol-male</div>
          </div>
          <div className="columns">
            <p><i className="si si-tag fa-2x"></i></p>
            <div>si-tag</div>
          </div>
          <div className="columns">
            <p><i className="si si-target fa-2x"></i></p>
            <div>si-target</div>
          </div>
          <div className="columns">
            <p><i className="si si-trash fa-2x"></i></p>
            <div>si-trash</div>
          </div>
          <div className="columns">
            <p><i className="si si-trophy fa-2x"></i></p>
            <div>si-trophy</div>
          </div>
          <div className="columns">
            <p><i className="si si-umbrella fa-2x"></i></p>
            <div>si-umbrella</div>
          </div>
          <div className="columns">
            <p><i className="si si-user fa-2x"></i></p>
            <div>si-user</div>
          </div>
          <div className="columns">
            <p><i className="si si-user-female fa-2x"></i></p>
            <div>si-user-female</div>
          </div>
          <div className="columns">
            <p><i className="si si-user-follow fa-2x"></i></p>
            <div>si-user-follow</div>
          </div>
          <div className="columns">
            <p><i className="si si-user-following fa-2x"></i></p>
            <div>si-user-following</div>
          </div>
          <div className="columns">
            <p><i className="si si-user-unfollow fa-2x"></i></p>
            <div>si-user-unfollow</div>
          </div>
          <div className="columns">
            <p><i className="si si-users fa-2x"></i></p>
            <div>si-users</div>
          </div>
          <div className="columns">
            <p><i className="si si-vector fa-2x"></i></p>
            <div>si-vector</div>
          </div>
          <div className="columns">
            <p><i className="si si-volume-1 fa-2x"></i></p>
            <div>si-volume-1</div>
          </div>
          <div className="columns">
            <p><i className="si si-volume-2 fa-2x"></i></p>
            <div>si-volume-2</div>
          </div>
          <div className="columns">
            <p><i className="si si-volume-off fa-2x"></i></p>
            <div>si-volume-off</div>
          </div>
          <div className="columns">
            <p><i className="si si-wallet fa-2x"></i></p>
            <div>si-wallet</div>
          </div>
          <div className="columns">
            <p><i className="si si-wrench fa-2x"></i></p>
            <div>si-wrench</div>
          </div>
        </div>


        <br/>
        <br/>
        <strong className="to-upper">HBC icons</strong>
        <div className="row text-center small-up-6 icon-list">
          <div className="columns">
            <i className="hbc-calendar"></i>
            <div>hbc-calendar</div>
          </div>
          <div className="columns">
            <i className="hbc-mail"></i>
            <div>hbc-mail</div>
          </div>
          <div className="columns">
            <i className="hbc-upload"></i>
            <div>hbc-upload</div>
          </div>
          <div className="columns">
            <i className="hbc-minus"></i>
            <div>hbc-minus</div>
          </div>
          <div className="columns">
            <i className="hbc-phone"></i>
            <div>hbc-phone</div>
          </div>
          <div className="columns">
            <i className="hbc-item1"></i>
            <div>hbc-item1</div>
          </div>
          <div className="columns">
            <i className="hbc-item2"></i>
            <div>hbc-item2</div>
          </div>
          <div className="columns">
            <i className="hbc-item3"></i>
            <div>hbc-item3</div>
          </div>
          <div className="columns">
            <i className="hbc-item4"></i>
            <div>hbc-item3</div>
          </div>
          <div className="columns">
            <i className="hbc-comment"></i>
            <div>hbc-comment</div>
          </div>
          <div className="columns">
            <i className="hbc-item5"></i>
            <div>hbc-item5</div>
          </div>
          <div className="columns">
            <i className="hbc-item6"></i>
            <div>hbc-item6</div>
          </div>
          <div className="columns">
            <i className="hbc-search-bold"></i>
            <div>hbc-search-bold</div>
          </div>
          <div className="columns">
            <i className="hbc-check-bold"></i>
            <div>hbc-check-bold</div>
          </div>
          <div className="columns">
            <i className="hbc-check-light"></i>
            <div>hbc-check-light</div>
          </div>
          <div className="columns">
            <i className="hbc-expand"></i>
            <div>hbc-expand</div>
          </div>
          <div className="columns">
            <i className="hbc-user-fill"></i>
            <div>hbc-user-fill</div>
          </div>
          <div className="columns">
            <i className="hbc-grid"></i>
            <div>hbc-grid</div>
          </div>
          <div className="columns">
            <i className="hbc-plus"></i>
            <div>hbc-plus</div>
          </div>
          <div className="columns">
            <i className="hbc-comment-fill"></i>
            <div>hbc-comment-fill</div>
          </div>
          <div className="columns">
            <i className="hbc-contact-book"></i>
            <div>hbc-contact-book</div>
          </div>
          <div className="columns">
            <i className="hbc-marker"></i>
            <div>hbc-marker</div>
          </div>

          <div className="columns">
            <i className="hbc-photocam"></i>
            <div>hbc-photocam</div>
          </div>
          <div className="columns">
            <i className="hbc-checkbox-stroke"></i>
            <div>hbc-checkbox-stroke</div>
          </div>
          <div className="columns">
            <i className="hbc-checkbox-fill"></i>
            <div>hbc-checkbox-fill</div>
          </div>
          <div className="columns">
            <i className="hbc-user-stroke"></i>
            <div>hbc-user-stroke</div>
          </div>
          <div className="columns">
            <i className="hbc-plus-fill"></i>
            <div>hbc-plus-fill</div>
          </div>
          <div className="columns">
            <i className="hbc-info"></i>
            <div>hbc-info</div>
          </div>
          <div className="columns">
            <i className="hbc-plus-stroke"></i>
            <div>hbc-plus-stroke</div>
          </div>
          <div className="columns">
            <i className="hbc-triangle"></i>
            <div>hbc-triangle</div>
          </div>
          <div className="columns">
            <i className="hbc-warning"></i>
            <div>hbc-warning</div>
          </div>
          <div className="columns">
            <i className="hbc-success"></i>
            <div>hbc-success</div>
          </div>
          <div className="columns">
            <i className="hbc-expand-round"></i>
            <div>hbc-expand-round</div>
          </div>
          <div className="columns">
            <i className="hbc-bag"></i>
            <div>hbc-bag</div>
          </div>

          <div className="columns">
            <i className="hbc-bardiv"></i>
            <div>hbc-bardiv</div>
          </div>

          <div className="columns">
            <i className="hbc-edit"></i>
            <div>hbc-edit</div>
          </div>

          <div className="columns">
            <i className="hbc-card"></i>
            <div>hbc-card</div>
          </div>

          <div className="columns">
            <i className="hbc-checkbox-bolder"></i>
            <div>hbc-checkbox-bolder</div>
          </div>

          <div className="columns">
            <i className="hbc-arrow-down"></i>
            <div>hbc-arrow-down</div>
          </div>

          <div className="columns">
            <i className="hbc-arrow-left"></i>
            <div>hbc-arrow-left</div>
          </div>

          <div className="columns">
            <i className="hbc-arrow-right"></i>
            <div>hbc-arrow-right</div>
          </div>

          <div className="columns">
            <i className="hbc-arrow-top"></i>
            <div>hbc-arrow-top</div>
          </div>

          <div className="columns">
            <i className="hbc-time"></i>
            <div>hbc-time</div>
          </div>

          <div className="columns">
            <i className="hbc-cross"></i>
            <div>hbc-cross</div>
          </div>

          <div className="columns">
            <i className="hbc-close"></i>
            <div>hbc-close</div>
          </div>

          <div className="columns">
            <i className="hbc-pencil"></i>
            <div>hbc-pencil</div>
          </div>
          <div className="columns">
            <i className="hbc-facebook"></i>
            <div>hbc-facebook</div>
          </div>
          <div className="columns">
            <i className="hbc-item7"></i>
            <div>hbc-item7</div>
          </div>
          <div className="columns">
            <i className="hbc-item8"></i>
            <div>hbc-item8</div>
          </div>
          <div className="columns">
            <i className="hbc-gift"></i>
            <div>hbc-gift</div>
          </div>
          <div className="columns">
            <i className="hbc-google-plus"></i>
            <div>hbc-google-plus</div>
          </div>
          <div className="columns">
            <i className="hbc-menu"></i>
            <div>hbc-menu</div>
          </div>
          <div className="columns">
            <i className="hbc-instagram"></i>
            <div>hbc-instagram</div>
          </div>
          <div className="columns">
            <i className="hbc-lock"></i>
            <div>hbc-lock</div>
          </div>
          <div className="columns">
            <i className="hbc-mute"></i>
            <div>hbc-mute</div>
          </div>
          <div className="columns">
            <i className="hbc-resize-1"></i>
            <div>hbc-resize-1</div>
          </div>
          <div className="columns">
            <i className="hbc-minus-thin"></i>
            <div>hbc-minus-thin</div>
          </div>
          <div className="columns">
            <i className="hbc-mobile"></i>
            <div>hbc-mobile</div>
          </div>
          <div className="columns">
            <i className="hbc-equal"></i>
            <div>hbc-equal</div>
          </div>
          <div className="columns">
            <i className="hbc-grid1"></i>
            <div>hbc-grid1</div>
          </div>
          <div className="columns">
            <i className="hbc-pause"></i>
            <div>hbc-pause</div>
          </div>
          <div className="columns">
            <i className="hbc-item9"></i>
            <div>hbc-item9</div>
          </div>
          <div className="columns">
            <i className="hbc-plus-thin"></i>
            <div>hbc-plus-thin</div>
          </div>
          <div className="columns">
            <i className="hbc-copy"></i>
            <div>hbc-copy</div>
          </div>

          <div className="columns">
            <i className="hbc-print"></i>
            <div>hbc-print</div>
          </div>

          <div className="columns">
            <i className="hbc-question"></i>
            <div>hbc-question</div>
          </div>

          <div className="columns">
            <i className="hbc-reload"></i>
            <div>hbc-reload</div>
          </div>

          <div className="columns">
            <i className="hbc-cross-bold"></i>
            <div>hbc-cross-bold</div>
          </div>

          <div className="columns">
            <i className="hbc-resize-2"></i>
            <div>hbc-resize-2</div>
          </div>

          <div className="columns">
            <i className="hbc-share"></i>
            <div>hbc-share</div>
          </div>

          <div className="columns">
            <i className="hbc-item10"></i>
            <div>hbc-item10</div>
          </div>
          <div className="columns">
            <i className="hbc-item11"></i>
            <div>hbc-item11</div>
          </div>
          <div className="columns">
            <i className="hbc-like"></i>
            <div>hbc-like</div>
          </div>
          <div className="columns">
            <i className="hbc-search-light"></i>
            <div>hbc-search-light</div>
          </div>
          <div className="columns">
            <i className="hbc-upload-1"></i>
            <div>hbc-upload-1</div>
          </div>
          <div className="columns">
            <i className="hbc-sms"></i>
            <div>hbc-sms</div>
          </div>
          <div className="columns">
            <i className="hbc-star"></i>
            <div>hbc-star</div>
          </div>
          <div className="columns">
            <i className="hbc-stop"></i>
            <div>hbc-stop</div>
          </div>
          <div className="columns">
            <i className="hbc-triangle-down"></i>
            <div>hbc-triangle-down</div>
          </div>
          <div className="columns">
            <i className="hbc-triangle-right"></i>
            <div>hbc-triangle-right</div>
          </div>
          <div className="columns">
            <i className="hbc-twitter-1"></i>
            <div>hbc-twitter-1</div>
          </div>
          <div className="columns">
            <i className="hbc-twitter-2"></i>
            <div>hbc-twitter-2</div>
          </div>
          <div className="columns">
            <i className="hbc-triangle-top"></i>
            <div>hbc-triangle-top</div>
          </div>
          <div className="columns">
            <i className="hbc-play"></i>
            <div>hbc-play</div>
          </div>
          <div className="columns">
            <i className="hbc-vimeo"></i>
            <div>hbc-vimeo</div>
          </div>
          <div className="columns">
            <i className="hbc-sound"></i>
            <div>hbc-sound</div>
          </div>
          <div className="columns">
            <i className="hbc-tetris"></i>
            <div>hbc-tetris</div>
          </div>
          <div className="columns">
            <i className="hbc-youtube-play"></i>
            <div>hbc-youtube-play</div>
          </div>

          <div className="columns">
            <i className="hbc-search-plus"></i>
            <div>hbc-search-plus</div>
          </div>
          <div className="columns">
            <i className="hbc-search-minus"></i>
            <div>hbc-search-minus</div>
          </div>
          <div className="columns">
            <i className="hbc-bag-stroke"></i>
            <div>hbc-bag-stroke</div>
          </div>
          <div className="columns">
            <i className="hbc-new"></i>
            <div>hbc-new</div>
          </div>
          <div className="columns">
            <i className="hbc-round-minus"></i>
            <div>hbc-round-minus</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
