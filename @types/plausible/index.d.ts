type Options ={
    callback?: () => void
    props: Record<string, strting|number|undefined>

}

interface Window {
    plausible: ( event: 'add_fox' | 'remove_fox', options?: options) => void;
}