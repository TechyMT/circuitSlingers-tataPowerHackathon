import 'package:flutter/material.dart';

class CustomListTile extends StatelessWidget {
  final String title;
  final String description;

  CustomListTile({
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16.0), // Padding around the entire custom tile
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          SizedBox(height: 4.0),
          Text(
            description,
            maxLines: 3, // Display a maximum of 3 lines for description
            overflow: TextOverflow.ellipsis,
            style: TextStyle(color: Colors.black),
          ),
        ],
      ),
    );
  }
}
