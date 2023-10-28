import 'package:circuitslingers/models/SolarPanalCard.dart';
import 'package:circuitslingers/models/WeatherData.dart';
import 'package:circuitslingers/models/WeatherDetailCard.dart';
import 'package:circuitslingers/networking.dart';
import 'package:circuitslingers/views/chat.dart';
import 'package:circuitslingers/views/newsPage.dart';
import 'package:circuitslingers/views/solarDataPanel.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:weather/weather.dart';
import 'package:intl/intl.dart';
import 'package:analog_clock/analog_clock.dart';

class WeatherScreen extends StatelessWidget {
  const WeatherScreen({Key? key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(children: [
        Image.asset(
          'assets/weather.jpg',
          fit: BoxFit.cover,
          width: double.infinity,
          height: double.infinity,
          color: Colors.black.withOpacity(0.1),
          colorBlendMode: BlendMode.darken,
        ),
        SingleChildScrollView(
          child: Column(
            children: [
              const SizedBox(height: 30),
              const Text(
                "Weather Today ",
                style: TextStyle(fontSize: 25, color: Colors.white),
              ),
              FutureBuilder<WeatherData>(
                future: fetchWeather(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  } else if (snapshot.hasError) {
                    return Text('Error: ${snapshot.error}');
                  } else {
                    final weather = snapshot.data;
                    final dateTime = DateTime.fromMillisecondsSinceEpoch(
                      weather!.dt * 1000,
                    );
                    final formattedDateTime =
                        DateFormat('yyyy-MM-dd HH:mm:ss').format(dateTime);
                    return Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const SizedBox(height: 10),
                        Text(
                          '$formattedDateTime',
                          style: const TextStyle(
                              fontSize: 25, color: Colors.white),
                        ),
                        // AnalogClock(
                        //   decoration: BoxDecoration(
                        //       border: Border.all(width: 2.0, color: Colors.black),
                        //       color: Colors.transparent,
                        //       shape: BoxShape.circle),
                        //   width: 150.0,
                        //   isLive: true,
                        //   hourHandColor: Colors.black,
                        //   minuteHandColor: Colors.black,
                        //   showSecondHand: false,
                        //   numberColor: Colors.black87,
                        //   showNumbers: true,
                        //   showAllNumbers: false,
                        //   textScaleFactor: 1.4,
                        //   showTicks: false,
                        //   showDigitalClock: false,
                        //   datetime: DateTime(2019, 1, 1, 9, 12, 15),
                        // ),
                        const SizedBox(height: 30),
                        Text(
                          'City: ${weather.cityName}',
                          style: const TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                              color: Colors.white),
                        ),
                        const SizedBox(height: 10),
                        Text(
                          'Temperature: ${weather.temperature}°C',
                          style: const TextStyle(
                              fontSize: 18, color: Colors.white),
                        ),
                        const SizedBox(height: 10),
                        Text(
                          'Weather: ${weather.description}',
                          style: const TextStyle(
                              fontSize: 18, color: Colors.white),
                        ),
                        const SizedBox(height: 25),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            WeatherDetailCard(
                              title: 'Feels Like',
                              value: '${weather.feelslike}°C',
                              icon: Icons.thermostat,
                            ),
                            WeatherDetailCard(
                              title: 'Wind',
                              value: '${weather.wind} km/h',
                              icon: Icons.air,
                            ),
                          ],
                        ),
                      ],
                    );
                  }
                },
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                height: MediaQuery.of(context).size.height * 0.3,
                child: SolarPanelCard(
                  dailyEnergyGenerated: 5.4,
                  costPerKWh: 10,
                  totalSavings: 1000,
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Column(
                children: [
                  ElevatedButton(
                    onPressed: () {
                      Get.to(() => ChatPage(), transition: Transition.downToUp);
                    },
                    child: Text("Chat With Our Bot"),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Get.to(() => SolarPanelScreen(),
                          transition: Transition.downToUp);
                    },
                    child: Text("Solar Data Overview"),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Get.to(() => NewsPage(), transition: Transition.downToUp);
                    },
                    child: Text("News from World"),
                  ),
                ],
              )
            ],
          ),
        ),
      ]),
    );
  }
}
