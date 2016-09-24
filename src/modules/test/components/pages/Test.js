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
            <i className="hbc-barcode"></i>
            <div>hbc-barcode</div>
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
