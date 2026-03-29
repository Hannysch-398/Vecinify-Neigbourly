package de.neighbourly.backend.security;

import lombok.Value;
import org.springframework.stereotype.Service;

import java.security.Key;

@Service
public class JwtService {

    @Value("$(jwt.secret)")
    private String secretKey;

    @Value("$(jwt.expiration)")

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
