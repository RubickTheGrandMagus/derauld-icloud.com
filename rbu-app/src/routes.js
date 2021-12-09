import Home from './routes/Home.svelte';
import Checklist from './routes/Checklist.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/Checklist': Checklist,
    // The catch-all route must always be last
    '*': NotFound
};
