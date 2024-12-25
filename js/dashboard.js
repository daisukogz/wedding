import { like } from './like.js';
import { util } from './util.js';
import { admin } from './admin.js';
import { theme } from './theme.js';
import { comment } from './comment.js';
import { pagination } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    admin.init();

    window.util = util;
    window.like = like;
    window.admin = admin;
    window.theme = theme;
    window.comment = comment;
    window.pagination = pagination;
});