package com.redis.server.controller;

import com.redis.server.service.RedisService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/redis")
@CrossOrigin(origins = "http://localhost:5173") // React app port
public class RedisController {
    private final RedisService redisService;

    public RedisController(RedisService redisService) {
        this.redisService = redisService;
    }

    @PostMapping("/save")
    public String save(@RequestParam String key, @RequestParam String value) {
        redisService.save(key, value);
        return "Saved!";
    }

    @GetMapping("/get")
    public String get(@RequestParam String key) {
        return redisService.get(key);
    }
}
