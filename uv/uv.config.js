self.__uv$config = {
    // the folder path prefix for the proxied sites
    prefix: '/uv/service/',
    
    // the backend server that actually fetches the websites. 
    // this is a popular public one, but if the proxy ever stops working, 
    // you might need to google "public bare servers" and swap this url.
    bare: 'https://tomp.app/', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // file paths to your other uv scripts
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
