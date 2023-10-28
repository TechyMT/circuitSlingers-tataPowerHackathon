import 'package:circuitslingers/views/Weather.dart';
import 'package:circuitslingers/views/chat.dart';
import 'package:circuitslingers/views/newsPage.dart';
import 'package:circuitslingers/views/solarDataPanel.dart';
import 'package:circuitslingers/views/splashscreen.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:weather/weather.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Flutter Demo',
        theme: ThemeData(
          textTheme: const TextTheme(
            bodyMedium: TextStyle(
              color: Colors.black,
            ),
          ),
          primaryColor: Colors.blue,
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
          useMaterial3: true,
        ),
        home: WeatherScreen());
  }
}
