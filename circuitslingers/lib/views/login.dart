import 'package:flutter/material.dart';

class Login extends StatelessWidget {
  const Login({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Column(
        children: [
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.2,
          ),
          const Padding(
            padding: EdgeInsets.fromLTRB(0, 8, 20, 20),
            child: Text(
              "The Best",
              style: TextStyle(fontSize: 50, color: Colors.white),
            ),
          ),
          const Padding(
            padding: EdgeInsets.fromLTRB(8.0, 8, 20, 20),
            child: Text(
              "App for",
              style: TextStyle(fontSize: 50, color: Colors.white),
            ),
          ),
          const Padding(
            padding: EdgeInsets.fromLTRB(16.0, 8, 20, 20),
            child: Text(
              "Your Energy",
              style: TextStyle(fontSize: 50, color: Colors.white),
            ),
          ),
          const SizedBox(
            height: 50,
          ),
          Center(
            child: Container(
              height: MediaQuery.of(context).size.height * 0.06,
              width: MediaQuery.of(context).size.width * 0.83,
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20.0),
                  bottomLeft: Radius.circular(20.0),
                ),
              ),
              child: ElevatedButton(
                onPressed: () {},
                child: const Text(
                  "Sign Up",
                  style: TextStyle(fontSize: 16),
                ),
              ),
            ),
          ),
          const SizedBox(
            height: 30,
          ),
          Center(
            child: Container(
              height: MediaQuery.of(context).size.height * 0.06,
              width: MediaQuery.of(context).size.width * 0.83,
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20.0),
                  bottomLeft: Radius.circular(20.0),
                ),
              ),
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
                onPressed: () {},
                child: const Text(
                  "Login",
                  style: TextStyle(fontSize: 16),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
