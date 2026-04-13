package de.neighbourly.backend.controller;
import de.neighbourly.backend.dto.LoginRequest;
import de.neighbourly.backend.dto.RegistrationRequest;
import de.neighbourly.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody RegistrationRequest request) {
        userService.registerUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body("Registrierung erfolgreich");
    }

    @PutMapping("/login") // Geändert von Get auf Post
    public ResponseEntity<String> login(@Valid @RequestBody LoginRequest request) {
        userService.loginUser(request);

        return ResponseEntity.ok("Login erfolgreich");
    }
}