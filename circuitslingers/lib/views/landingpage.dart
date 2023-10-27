import 'package:circuitslingers/views/login.dart';
import 'package:flutter/material.dart';
import 'package:animated_splash_screen/animated_splash_screen.dart';

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return AnimatedSplashScreen(
      splash: 'assets/landing.gif',
      nextScreen: Login(),
      splashTransition: SplashTransition.rotationTransition,
      duration: 3000,
      backgroundColor: Colors.green,
      

    );
  }
}

  
