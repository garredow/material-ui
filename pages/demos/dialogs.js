import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./dialogs${props.lang}.md`)}
      demos={{
        'pages/demos/dialogs/SimpleDialog.js': {
          js: require('docs/src/pages/demos/dialogs/SimpleDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/SimpleDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/AlertDialog.js': {
          js: require('docs/src/pages/demos/dialogs/AlertDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/AlertDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/AlertDialogSlide.js': {
          js: require('docs/src/pages/demos/dialogs/AlertDialogSlide').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/AlertDialogSlide'), 'utf8')
`,
        },
        'pages/demos/dialogs/ConfirmationDialog.js': {
          js: require('docs/src/pages/demos/dialogs/ConfirmationDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/ConfirmationDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/FullScreenDialog.js': {
          js: require('docs/src/pages/demos/dialogs/FullScreenDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/FullScreenDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/MaxWidthDialog.js': {
          js: require('docs/src/pages/demos/dialogs/MaxWidthDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/MaxWidthDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/FormDialog.js': {
          js: require('docs/src/pages/demos/dialogs/FormDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/FormDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/ResponsiveDialog.js': {
          js: require('docs/src/pages/demos/dialogs/ResponsiveDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/ResponsiveDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/ScrollDialog.js': {
          js: require('docs/src/pages/demos/dialogs/ScrollDialog').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/ScrollDialog'), 'utf8')
`,
        },
        'pages/demos/dialogs/CustomizedDialog.js': {
          js: require('docs/src/pages/demos/dialogs/CustomizedDialog.js').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dialogs/CustomizedDialog'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
