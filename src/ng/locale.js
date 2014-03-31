'use strict';

/**
 * @ngdoc service
 * @name $locale
 *
 * @description
 * $locale service provides localization rules for various Angular components. As of right now the
 * only public api is:
 *
 * * `id` – `{string}` – locale id formatted as `languageId-countryId` (e.g. `en-us`)
 * * `NUMBER_FORMATS` – `{object}` :
 *   * `DECIMAL_SEP` - `{string}` - decimal separator (e.g. `.`)
 *   * `GROUP_SEP` - `{string}` - group separator (e.g. `,`)
 *   * `PATTERNS` - `{object}` - Object containing decimal and currency patterns
 *   * `CURRENCY_SYM` - `{string}` - currency symbol (e.g. `$`)
 * * `DATETIME_FORMATS` – `{object}`:
 *   * `MONTH` - `{array[string]}` - Array of full names of the months (e.g. `January`, `March`)
 *   * `SHORTMONTH` - `{array[string]}` - Array of short names of the months (e.g. `Jan`, `March`)
 *   * `DAY` - `{array[string]}` - Array of full days of the week (e.g. `Monday`, `Friday`)
 *   * `SHORTDAY` - `{array[string]}` - Array of short days of the week (e.g. `Mon`, `Fri`)
 *   * `AMPMS` - `{string}` - Ante-meridiem and post-meridiem acronyms
 *   * `medium` - `{string}` - Date and time in medium format (e.g. `MMM d, y h:mm:ss a`)
 *   * `short` - `{string}` - Date and time in short format (e.g. `M/d/yy h:mm a`)
 *   * `fullDate` - `{string}` - Full format for date (e.g. `EEEE, MMMM d, y`)
 *   * `longDate` - `{string}` - Long format for date (e.g. `MMMM d, y`)
 *   * `mediumDate` - `{string}` - Medium format for date (e.g. `MMM d, y`)
 *   * `shortDate` - `{string}` - Short format for date (e.g. `M/d/yy`)
 *   * `mediumTime` - `{string}` - Medium format for time (e.g. `h:mm:ss a`)
 *   * `shortTime` - `{string}` - Short format for time (e.g. `h:mm a`)
 */

function $LocaleProvider(){
  this.$get = function() {
    return {
      id: 'en-us',

      NUMBER_FORMATS: {
        DECIMAL_SEP: '.',
        GROUP_SEP: ',',
        PATTERNS: [
          { // Decimal Pattern
            minInt: 1,
            minFrac: 0,
            maxFrac: 3,
            posPre: '',
            posSuf: '',
            negPre: '-',
            negSuf: '',
            gSize: 3,
            lgSize: 3
          },{ //Currency Pattern
            minInt: 1,
            minFrac: 2,
            maxFrac: 2,
            posPre: '\u00A4',
            posSuf: '',
            negPre: '(\u00A4',
            negSuf: ')',
            gSize: 3,
            lgSize: 3
          }
        ],
        CURRENCY_SYM: '$'
      },

      DATETIME_FORMATS: {
        MONTH:
            'January,February,March,April,May,June,July,August,September,October,November,December'
            .split(','),
        SHORTMONTH:  'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
        DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
        SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
        AMPMS: ['AM','PM'],
        medium: 'MMM d, y h:mm:ss a',
        short: 'M/d/yy h:mm a',
        fullDate: 'EEEE, MMMM d, y',
        longDate: 'MMMM d, y',
        mediumDate: 'MMM d, y',
        shortDate: 'M/d/yy',
        mediumTime: 'h:mm:ss a',
        shortTime: 'h:mm a'
      },

      pluralCat: function(num) {
        if (num === 1) {
          return 'one';
        }
        return 'other';
      }
    };
  };
}
