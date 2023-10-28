import 'package:circuitslingers/models/WeatherData.dart';
import 'package:circuitslingers/models/WeatherDetailCard.dart';
import 'package:circuitslingers/networking.dart';
import 'package:flutter/material.dart';
import 'package:weather/weather.dart';
import 'package:intl/intl.dart';

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
        Column(
          children: [
            SizedBox(height: 30),
            Text(
              "Weather Today ",
              style: TextStyle(fontSize: 25, color: Colors.white),
            ),
            FutureBuilder<WeatherData>(
              future: fetchWeather(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
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
                      SizedBox(height: 10),
                      Text(
                        '$formattedDateTime',
                        style: TextStyle(fontSize: 25, color: Colors.white),
                      ),
                      SizedBox(height: 30),
                      Text(
                        'City: ${weather.cityName}',
                        style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Colors.white),
                      ),
                      SizedBox(height: 10),
                      Text(
                        'Temperature: ${weather.temperature}°C',
                        style: TextStyle(fontSize: 18, color: Colors.white),
                      ),
                      SizedBox(height: 10),
                      Text(
                        'Weather: ${weather.description}',
                        style: TextStyle(fontSize: 18, color: Colors.white),
                      ),
                      SizedBox(height: 50),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          WeatherDetailCard(
                            title: 'Feels Like',
                            value: '${weather.feelslike}°C',
                            icon: Icons.thermostat, // Icon for temperature
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
          ],
        ),
      ]),
    );
  }
}
