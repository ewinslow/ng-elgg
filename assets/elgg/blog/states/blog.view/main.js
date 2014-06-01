import 'css!./styles.css';
    
export default {
    "controller": true,
    "parent": "default",
    "template": true,
    "url": "/blog/:alias",
    "resolve": ["blog"],
};
