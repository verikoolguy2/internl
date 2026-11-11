self.__uv$config = {
    prefix: '/internl/uv/service/',
    
    // public bare server. if it ever goes down, google "public bare servers" and replace this url
    bare: 'https://tomp.app/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // these absolute paths tell the proxy exactly where the engine files are on github pages
    handler: '/internl/uv/uv.handler.js',
    bundle: '/internl/uv/uv.bundle.js',
    config: '/internl/uv/uv.config.js',
    sw: '/internl/uv/uv.sw.js',
};
