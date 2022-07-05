package frametools;

import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

/**
 * A lightweight container that accepts strings from user input and 
 * displays the reversed strings in a non-editable text area.
 * @author TannerDolby
 *
 */
public class ReverseStringDemo extends JPanel implements ActionListener {
	private static final long serialVersionUID = 6741401887784258365L;
	// user input field
	private static JTextField textField;
	// textarea displaying output
	private static JTextArea textArea;
	private static JLabel label;
	
	// create a new grid bag layout manager
	// and layout the components in grid
	public ReverseStringDemo() {
		super(new GridBagLayout());
		
		textField = new JTextField(20); // 20 columns
		textField.addActionListener(this);
		
		textArea = new JTextArea(8, 20); // 8 rows, 20 columns
		// this container is meant to log output and shouldn't be editable
		textArea.setEditable(false);
		
		label = new JLabel("Enter input string:");
		
		// Setup the scroll pane for text area container
		JScrollPane scrollPane = new JScrollPane(textArea);
		
		// Initialize grid constraints to define for sizing/position for components in the layout
		GridBagConstraints c = new GridBagConstraints();
		
		// setup constraints for how components are resized in the window
		c.gridwidth = GridBagConstraints.REMAINDER;
		
		c.fill = GridBagConstraints.HORIZONTAL;
		c.gridx = 0;
		c.gridy = 0;
		add(label);
		
		// define grid position for textField
		c.fill = GridBagConstraints.HORIZONTAL;
		c.gridx = 0;
		c.gridy = 1;
		add(textField);
		
		// define grid position for the scroll pane
		c.fill = GridBagConstraints.BOTH;
		c.gridwidth = 3;
		// 40px of vertical padding
		c.ipady = 40;
		c.gridx = 0;
		c.gridy = 1;
		
		// Add scroll pane with its layout constraints
		add(scrollPane, c);
	}
	
	/**
	 * Setup a frame to store the text input component.
	 */
	private static void initGUI() {
		
		// Setup the JFrame and display the Reverse String demo which uses JTextField and JTextArea components
		JFrame frame = new JFrame("Reverse String Demo");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		frame.add(new ReverseStringDemo());
		
		frame.setVisible(true);
		frame.pack();
	}
	
	/*
	 * Action Listener for the JTextField `textField`. 
	 * Defined in the implemented ActionListener interface
	 */
	public void actionPerformed(ActionEvent evt) {
		// Event listener for text field
		String input = textField.getText();
		
		// Append user reversed input string to text area
		textArea.append(reverse(input, 0, input.length()-1) + "\n");
		
		// select all user inputted text
		textField.selectAll();
		
		// set caret position (text insertion location) 
		// for textArea by getting the number of characters
		// in the current text editor document
		int docLength = textArea.getDocument().getLength();
		textArea.setCaretPosition(docLength);
		
	}
	
	/**
	 * Reverse a character array in-place.
	 * O(n) time and O(1) space
	 * @param s Character array
	 * @param left Start position
	 * @param right End position
	 */
	private static void reverse(char[] s, int left, int right) {
		while (left < right) {
			char temp = s[left];
			s[left++] = s[right];
			s[right--] = temp;
		}
	}
	
	/**
	 * Reverse a string and return the reversed string.
	 * @param s Input string
	 * @param left Start position
	 * @param right End position
	 * @return The reversed string
	 */
	private static String reverse(String s, int left, int right) {
		char[] chars = s.toCharArray();
		reverse(chars, 0, chars.length-1);
		return new String(chars);
	}

	public static void main(String[] args) {
		
		// Schedule a new job/event using the "event dispatching" thread
		// Swing data-structures are not thread-safe 
		// so we schedule jobs on the AWT event-dispatching thread 
		javax.swing.SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				// render GUI
				initGUI();
			}
		});
	}

}
