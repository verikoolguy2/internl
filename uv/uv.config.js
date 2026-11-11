self.__uv$config = {
    // added the repo name so github pages finds it
    prefix: '/internl/uv/service/', 
    bare: 'https://tomp.app/', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // updated these paths too
    handler: '/internl/uv/uv.handler.js',
    bundle: '/internl/uv/uv.bundle.js',
    config: '/internl/uv/uv.config.js',
    sw: '/internl/uv/uv.sw.js',
};
