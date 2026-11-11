self.__uv$config = {
    prefix: '/internl/uv/service/',
    
    // updated live bare server
    bare: 'https://bare.benrovers.nl/', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    handler: '/internl/uv/uv.handler.js',
    bundle: '/internl/uv/uv.bundle.js',
    config: '/internl/uv/uv.config.js',
    sw: '/internl/uv/uv.sw.js',
};
